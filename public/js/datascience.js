const curriculum = {
  dsMath: `
    <h2>Foundations in Python and Linux</h2>
    <p>Master essential Python and Linux concepts</p>
    <ul>
      <li>Introduction to Python and Various IDEs</li>
      <li>Variables, data types, loops, conditional statements</li>
      <li>Functions, decorators, lambda functions</li>
      <li>Inbuilt Data Structures in Python</li>
      <li>File Handling, Exception handling, Errors, Regular Expressions</li>
      <li>Web Scraping and object-oriented programming (OOP)</li>
      <li>Introduction to the Linux Operating System</li>
      <li>File handling, data extraction</li>
      <li>Command-line operations in Linux</li>
    </ul>
  `,
  dsProg: `
    <h2>Data Structures and Algorithms</h2>
    <p>Learn deep understanding of logic creation</p>
    <ul>
      <li>Introduction to Data Structures</li>
      <li>Arrays and Lists Exploratione</li>
      <li>Stacks and Queues Usage</li>
      <li>Basic Sorting Algorithms</li>
      <li>Searching Techniques</li>
      <li>Introduction to Trees</li>
      <li>Graph Fundamentals</li>
      <li>Basic Dynamic Programming</li>
      <li>Hashing and Hash Tables</li>
    </ul>
  `,
  dsStats: `
    <h2>Statistics and Probability</h2>
    <p>Master statistical concepts for data analysis</p>
    <ul>
      <li>Statistics Fundamentals</li>
      <li>Importance of Statistics in Data Science</li>
      <li>Types of Statistics</li>
      <li>Common Statistical Terms</li>
      <li>Probability Distribution</li>
      <li>Hypothesis Testing, Bayes’ Theorem</li>
      <li>Experimental Design, Concept of Confidence</li>
      <li>Descriptive Measures in Statistics</li>
      <li>Statistics and Probability Applications</li>
    </ul>
  `,
  dsML: `
    <h2>Data Wrangling With SQL</h2>
    <p>Learn Data Wranling witj SQL</p>
    <ul>
      <li>Working with tables, Joins, and Variables</li>
      <li>Functions, Subqueries, Rules, Views</li>
      <li>Nested queries, Optimization techniques, String functions</li>
      <li>Pattern matching, Date-time functions</li>
      <li>Complex queries using CTE and Pivoting</li>
      <li>Mathematical functions</li>
      <li>Database Management and Schema Design</li>
      <li>SQL and Python for Data Exploration</li>
      <li>SQL and Python for Database Management</li>
    </ul>
  `,
  dsDL: `
    <h2>Python for Data Analysis and Visualization</h2>
    <p>Delve into deep learning techniques</p>
    <ul>
      <li>Introduction to Numpy</li>
      <li>Numpy Arrays, Functions and Data Manipulation</li>
      <li>Introduction to Pandas</li>
      <li>DataFrames and Data Manipulation</li>
      <li>Introduction to Matplotlib</li>
      <li>Plotting time-series</li>
      <li>Quantitative comparisons and statistical visualizations</li>
      <li>Introduction to Seaborn</li>
      <li>Seaborn Plot Types and Styling Visualizations</li>
    </ul>
  `,
  dsViz: `
    <h2>Machine Learning</h2>
    <p>Introduction to machine learning</p>
    <ul>
      <li>Fundamentals of Machine Learning</li>
      <li>Mathematics behind Machine Learning</li>
      <li>Types, importance, libraries, and working principles</li>
      <li>Scikit-learn and Keras Applications</li>
      <li>Supervised and Unsupervised Learning</li>
      <li>Regression and Classification and their Applications</li>
      <li>Ensemble Learning</li>
      <li>Natural Language Processing</li>
      <li>Deep Learning</li>
    </ul>
  `,
  dsSQL: `
    <h2>Power BI for Data Modeling and Visualization</h2>
    <p>Data Modeling and Visualization</p>
    <ul>
      <li>Power BI Data Model Concepts</li>
      <li>Relationship Building and Viewing</li>
      <li>Techniques for Data Manipulation</li>
      <li>Building Dynamic Visualizations</li>
      <li>Transforming Data</li>
      <li>Drilling down and Filtering</li>
      <li>Power Query Editor</li>
      <li>Numerical transformations in Power Query</li>
      <li>Introduction to DAX in Power BI</li>
    </ul>
  `,
  dsProj: `
    <h2>Job Readiness and Career Guidance</h2>
    <p>Apply skills to real-world data science projects</p>
    <ul>
      <li>Job Search Strategies</li>
      <li>Resume Building</li>
      <li>LinkedIn Profile Creation</li>
      <li>Placement Opportunities with Industry Experts</li>
      <li>Building a Strong Professional Network</li>
      <li>Personal Branding and Online Presence</li>
      <li>Interview Preparation Sessions, Mock Interviews</li>
      <li>Soft Skills Development</li>
      <li>Career Growth and Upskilling</li>
    </ul>
  `,
};

function showContent(section) {
	// Define your curriculum content here for each section

	// Get the content container
	const contentContainer = document.getElementById("contentContainer");

	// Update the content based on the clicked section
	contentContainer.innerHTML = `<div class="content">${curriculum[section]}</div>`;
	const buttons = document.querySelectorAll(".timeline-buttons button");
	buttons.forEach((button) => {
		button.classList.remove("selected");
		button.style.backgroundColor = "#f3009e";
	});

	// Add the 'selected' class to the clicked button
	const clickedButton = document.getElementById(`${section}Btn`);
	clickedButton.classList.add("selected");
	contentContainer.innerHTML = `<div class="content">${curriculum[section]}</div>`;

	// Change the background color of the content box based on the selected section
	const backgroundColors = {
		dsMath: "#3498db", // Blue
		dsProg: "#2ecc71", // Green
		dsStats: "#e74c3c", // Red
		dsML: "#f39c12", // Yellow
		dsDL: "#9b59b6", // Purple
		dsViz: "#1abc9c", // Turquoise
		dsSQL: "#34495e", // Dark Blue
		dsProj: "#e67e22", // Orange
	};
	const colors = {
		dsMath: "#0085aa",
		dsProg: "#14a353",
		dsStats: "#fbcc05",
		dsML: "#ea4335",
		dsDL: "#673ab7",
		dsViz: "#795548",
		dsSQL: "#2196F3",
		dsProj: "#FF5722",
	};

	const selectedButton = document.getElementById(`${section}Btn`);
	contentContainer.style.backgroundColor = backgroundColors[section];
	selectedButton.classList.add("selected");
	selectedButton.style.backgroundColor = backgroundColors[section];
	const contentSection = document.querySelector(".content-section");
	contentSection.style.backgroundColor = colors[section];
}
showContent("dsMath");
