## Polygonization of a Scaler Field In Real-Time

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

```csrp
int caseIndex = 0;
```

---

## Section 2: Breakstep March

---

With the ability to draw each case, all we need to do is loop through our 2D array of values to construct a mesh. In Unity, we can create a list of Vector2s that will hold the positions of each vertex. We can then create a list of triangles that will hold the three vertices we need to build a mesh. We can then pass our lists into the mesh component in Unity. Lets start by setting up our variables. The list of vertices is easy, but for the triangles, we will create a custom struct to hold each vertex.

#### Some T-SQL Code

```tsql
SELECT This, [Is], A, Code, Block -- Using SSMS style syntax highlighting
    , REVERSE('abc')
FROM dbo.SomeTable s
    CROSS JOIN dbo.OtherTable o;
```

#### Some PowerShell Code

```powershell
Write-Host "This is a powershell Code block";

# There are many other languages you can use, but the style has to be loaded first

ForEach ($thing in $things) {
    Write-Output "It highlights it using the GitHub style"
}
```
