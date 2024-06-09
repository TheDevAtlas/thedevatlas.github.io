## Remaking Guitar Hero

### Section 0: Project Goals

---

One of the coolest mechanics in video games in the ability to create and destroy objects in real-time. That is, being able to deform a mesh with thousands of vertices while keeping the performance of the program high. Throughout the summer I have experienced multiple space games that use this: No Man’s Sky, Space Engineers, and Astroneer. After doing some research I found a lead from the makers of Astroneer that they used a technique called Marching Cubes to create their terrain system.

!["Games from left to right: No Man’s Sky, Space Engineers, Astroneer."](/photos/marchingsquares/1.png)

I decided to look further into this idea to create my own destructible terrain system but in 2D to simplify the problem and explore how the program works.

---

What is the Marching Squares algorithm? As described in GPU Gems 3 by NVIDIA, we can create a scaler field with a continuous function. I used Unity's built-in Perlin Noise function because of its versatility, as it can be sampled at any location. For more complex results, we can use octaves and layering techniques. When we sample this function we get a value between 0 and 1.

!["Perlin Noise Equation"](/photos/marchingsquares/2.png)

Using this data, we can sample the 4 vertices of a square. If a corner is above 0.5 it is inside the ground and if it is less than 0.5 it is in midair. We can then calculate the number of possible combinations of points. Since each corner can either be in the ground or in the air there are two states for each verticce. There are four vertices so we can calculate that (2 * 2 * 2 * 2) = 16 total states. In fact, we can draw out each combination.

!["Perlin Noise Equation"](/photos/marchingsquares/3.png)

For each case, we can draw triangles to represent the data. Any “orange” point will be inside the mesh and any “white” point will be outside. For any case that has only one point above our threshold, we only have to draw one triangle.

!["Perlin Noise Equation"](/photos/marchingsquares/4.png)

For cases where there are two points above our threshold we draw two triangles.

!["Perlin Noise Equation"](/photos/marchingsquares/5.png)
!["Perlin Noise Equation"](/photos/marchingsquares/6.png)


For cases where there are three points above our threshold we draw three triangles.

!["Perlin Noise Equation"](/photos/marchingsquares/7.png)

Our last two cases are very simple. If there are no points above the threshold, then we don’t draw any triangles. If all four points are above the threshold then we only need two triangles to fill in the square.

!["Perlin Noise Equation"](/photos/marchingsquares/8.png)

What I need to do with this information is be able to turn a 4-bit number that represents these points and return the vertices needed for each case. Each corner can be represented by a bit. We can then shift each bit over to get our final case number.

```csharp
int caseIndex = 0;
if(bl >= valueCutoff)
{
    caseIndex += 1;
}
if(br >= valueCutoff)
{
    caseIndex += 2;
}
if(tl >= valueCutoff)
{
    caseIndex += 4;
}
if(tr >= valueCutoff)
{
    caseIndex += 8;
}
```

---

## Section 2: Breakstep March

---

With the ability to draw each case, all we need to do is loop through our 2D array of values to construct a mesh. In Unity, we can create a list of Vector2s that will hold the positions of each vertex. We can then create a list of triangles that will hold the three vertices we need to build a mesh. We can then pass our lists into the mesh component in Unity. Lets start by setting up our variables. The list of vertices is easy, but for the triangles, we will create a custom struct to hold each vertex.

```csharp
public List<Vector3> verts;

struct Triangle 
{
    public Vector3 av;
    public Vector3 bv;
    public Vector3 cv;
}

public List<Triangle> tris;
```

From here we can sample our function. This can be done in many ways, but for now I will just preload a noise map from the previous Perlin Noise function.

```csharp
public float[][] samplePoints
```

!["Perlin Noise Equation"](/photos/marchingsquares/9.png)

# Performance Check-In
Now we will loop through each square, calculate what case it is, and add those vertices and triangles to the lists. With this, we can now generate thousands of triangles. The problem is that the program is no longer running at an interactive frame rate. We only get 30 frames per second, without any other code in our program. Similating something with our current code would be like a slideshow.

---

## Section 3: Marching All At Once

---

One solution to the performance problem is to remove the nested for-loop and calculate the vertices and triangles another way. We could also shift the calculations from the CPU to the GPU. To do this we can use the High Level Shader-Language or HLSL. Unity calls these scripts Compute Shaders. In order to call a compute shader we first give the GPU a texture with our samplePoints. We also tell it to give back the vertices and triangles.

```csharp
triangleBuffer = new ComputeBuffer((xSize-1) * (ySize-1) * 3, sizeof(float) * 3 * 3, ComputeBufferType.Append);
triCountBuffer = new ComputeBuffer(1, sizeof(int), ComputeBufferType.Raw);

triangleBuffer.SetCounterValue(0);
marchingSquares.SetBuffer(0, "triangles", triangleBuffer);
marchingSquares.SetFloat("valueCutoff", valueCutoff);
marchingSquares.SetTexture(0, "valueTexture", valueTexture);
```

Now we can convert our original code into the shader. Here is an example of creating a triangle for the bottom left corner or case 1:

```csharp
if (caseIndex == 1) {
    Triangle tri1;
    tri1.av = float3(id.x + 0.0f, id.y + 0.0f, 0.0f);
    tri1.bv = float3(id.x + 0.5f, id.y + 0.0f, 0.0f);
    tri1.cv = float3(id.x + 0.0f, id.y + 0.5f, 0.0f);
    triangles.Append(tri1);
}
```

Converting all of our triangle code to C# we can now see what our performance gain is.

!["Perlin Noise Equation"](/photos/marchingsquares/10.png)

# Performance Check-In
Now we calculate all of our cases, vertexes, and triangles inside of the GPU. We have a 10x performance increase by just moving our computation to the Compute Shader.

Finally our project runs in real time and lets us run extra code without affecting performance. In this example I have another script that destroys terrain when the player interacts with the game.

To see my full code (or steal it for yourself) go check out my GitHub.