# Activity / Lab / Assignment / Project Title

* *Date Created*: 16 10 2025
* *Last Modification Date*: 19 10 2025 
* *Lab URL*: <https://web.cs.dal.ca/~hhansen/dgin5100/labs/lab2/index.html>
* *GitLab URL*: https://git.cs.dal.ca/hhansen/dgin5100/-/blob/main/labs/lab2/projects.html>


## Authors

* [Hans-Henrik Hansen](wy505063@dal.ca) - (Role)


## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

### index.html

Lines 24 - 61
---------------

```
<nav class="navigation">
				<!-- below implementation of navigation is strongly inspired by Mehrads code in index html 
				in https://github.com/MehradHajati/MehradHajati.github.io/blob/main/index.html -->
				<h1 class="pagelogo"> My personal portfolio</h1>
				<ul class="taboverview">
					<li class="active_tab" title="Home Page"> 
						<a href="index.html"> 
							<i class="fa-solid fa-house"></i>Home 
						</a>
					</li>
					<li class="tab" title="Educational background"> 
						<a href="education.html">
							<i class="fas fa-graduation-cap"></i>Education
						</a>
					</li>
					<li class="tab" title="Work Experience"> 
						<a href="work.html">
							<i class="fas fa-briefcase"></i>Work Experience
						</a>
					</li>
					<li class="tab" title="Hobbies and Interests"> 
						<a href="hobbies.html">
							<i class="fas fa-beer"></i>Hobbies & Interests
						</a>
					</li>
						<li class="tab" title="Extra-curricular"> 
						<a href="extra.html">
							<i class="fas fa-hands-helping"></i>Extra-curricular
						</a>
					</li>
					</li>
						<li class="tab" title="Project Portfolio"> 
						<a href="projects.html">
							<i class="fas fa-folder-open"></i>Project Portfolio
						</a>
					</li>
				</ul>
			</nav>

```

The code above was created by adapting the code in [Mehrad Hajati](https://github.com/MehradHajati/MehradHajati.github.io/blob/main/index.html -->) as shown below: 

```
<ul class="tabs">
        <li class="active tab" title="Main Page"> <a href="index.html"> <i class="fa-solid fa-house"></i> Home</a></li>
        <li class="tab" title="Family Page"> <a href="family.html"> <i class="fa-solid fa-children"></i> Family</a></li>
        <li class="tab" title="Education Page"><a href="education.html"> <i class="fa-solid fa-school"></i> Education</a></li>
        <li class="tab" title="Physical Activities Page"><a href="physical.html"> <i class="fa-solid fa-dumbbell"></i> Physical Activities</a></li>
        <li class="tab" title="Coding Projects Page"><a href="coding.html"> <i class="fa-solid fa-code"></i> Coding Projects</a></li>
        <li class="tab" title="Work Experience Page"><a href="work.html"> <i class="fa-solid fa-briefcase"></i> Work Experience</a></li>
    </ul>

```

- <!---How---> The code in [Mehrad Hajati index.html](https://github.com/MehradHajati/MehradHajati.github.io/blob/main/index.html) was implemented by using a CDN and restructuring a bit to add additional classes for CSS manipulation purposes
- <!---Why---> The Code was used because I really liked the logos in the nav buttons and wanted a similar style so i used the font-awesome as well
- <!---How---> The code was modified by using a CDN instead of an installed version and it was the tab structure was changed a bit for CSS styling purposes


## Acknowledgments

* I also used severeal developer sites to understand the syntax and application of flexbox containers
* I used https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries to understand and implement the breakpoints for tablet, mobile and desktop media
* I used chatGPT on an ongoing basis to better understand my mistakes and for inspiration for implementation of media queries and flexbox containers. However, I made sure to try avoiding copy pasting any generated code and focused on implementing my own take on how it could best fit the style of my page.
