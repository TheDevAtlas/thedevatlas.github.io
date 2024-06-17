## How I Made AI Magic Cards

### Section 0: Project Goals

---

One of my favorite games is Magic: The Gathering. There are over 30,000 cards to build a deck and it creates one of the best environments to make friends and have fun. My idea for this project is to take some new AI tools and make some new AI-generated Magic cards. This includes making sure that the AI makes game design decisions as well as artistic decisions.

!["Magic: The Gathering Logo"](/photos/aimagiccards/1.png)

Let's start by discussing how Magic cards are made.

---

### Section 1: What's in a (card)name?

---

Magic cards are made of a few different layers of art, borders, and text.

!["Layers of art, border, and text"](/photos/aimagiccards/2.png)

First is the art. Because this is an AI project, we will be using AI-generated art. This does have some controversy surrounding it, so please use AI art responsibly. I will be using a model from [Hugging Face](https://huggingface.co/) and the [A1111 GUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui). This part is free as long as you have a GPU. Because this project took place over a few months, multiple models were used, so your quality of art will vary.

Then there is text. For text generation, I will be using my OpenAI account and use an API key for ChatGPT. Spoiler for the end of the project: the total cost for my AI use was only 3-4 dollars.

Lastly, we can get the borders by using custom card-making websites that people use for proxies. Sadly, many of these get taken down, but I was able to source mine from [Card Conjurer](https://cardconjurer.com/) before it got a DMCA from Wizards.

With my new boards in hand, I created a new Unity project so that I could easily create a user interface.

---

### Section 2: How are we going to make so many cards?

---

I started by importing all of my card frames and making a simple card frame switcher. This lets me change how the border looks very quickly. I also made sure to add as much customization as possible so that the AI can make some wacky choices later.

!["Card Frame Switcher"](/photos/aimagiccards/3.png)

I also added the Magic: The Gathering Font to each of the sections and used a few cards as references to get this part to line up. I also added some fake copyright information and the PROXY line so that no one thinks that these are real cards.

!["Text and Copyright Line"](/photos/aimagiccards/4.png)

I also added a simple sprite to hold any art that we generate.

!["Sprite to Hold the Art"](/photos/aimagiccards/5.png)

Lastly, we can put together a script to export these cards as .png images for print. I did this by adding an extra camera into my scene and having it render to a render texture. The cool thing about render textures is that we can access all of the pixel data, so we can just shove this into any image format that we like. I used .png to fix any transparency issues, but that is not really necessary.

!["Diagram of Camera and Render Texture"](/photos/aimagiccards/6.png)

With all of these basic systems in place, all we need to do is create a way for our AI to generate the text and art for a card, and then export it to the computer.

---

### Section 3: Intelligence? 

---

It is time to integrate AI into Unity. Let's start by looking at what information we need from ChatGPT to make a Magic card:

- The Card Name
- Card Colors
- Card Type
- Rules Text
- Power and Toughness (if needed)
- Card Art Prompt (to send to A1111)

Getting this information may seem simple, but there are problems with parsing strings when you do not know what the AI might respond with. Here is an example of responses before my fix.

!["Broken Responses"](/photos/aimagiccards/7.png)

We can fix this by asking ChatGPT to put all of these bits of information into a JSON format, and then we can just remove anything that is not part of the JSON.

!["Fixed Responses"](/photos/aimagiccards/8.png)

Perfect, now we can connect ChatGPT and Unity for real. All we need to do is connect to my OpenAI api key and send a request.

```csharp
void Start()
{
    StartCoroutine(RequestChatGPT("Card prompt here"));
}

IEnumerator RequestChatGPT(string prompt)
{
    var requestBody = new
    {
        model = "gpt-4",
        messages = new[]
        {
            new { role = "user", content = prompt }
        }
    };

    string json = JsonUtility.ToJson(requestBody);

    using (UnityWebRequest webRequest = new UnityWebRequest(apiURL, "POST"))
    {
        byte[] jsonToSend = new System.Text.UTF8Encoding().GetBytes(json);
        webRequest.uploadHandler = (UploadHandler)new UploadHandlerRaw(jsonToSend);
        webRequest.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer();
        webRequest.SetRequestHeader("Content-Type", "application/json");
        webRequest.SetRequestHeader("Authorization", $"Bearer {apiKey}");

        yield return webRequest.SendWebRequest();

        if (webRequest.isNetworkError || webRequest.isHttpError)
        {
            Debug.LogError("Error: " + webRequest.error);
        }
        else
        {
            Debug.Log("Received: " + webRequest.downloadHandler.text);
            Process(webRequest.downloadHandler.text);
        }
    }
}
```

