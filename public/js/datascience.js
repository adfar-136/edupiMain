const curriculum = {
  dsMath: `
    <h2>Mathematics for Data Science</h2>
    <p>Master essential math concepts:</p>
    <ul>
      <li>Linear Algebra Basics</li>
      <li>Calculus Fundamentals</li>
      <li>Probability Theory Essentials</li>
      <li>Key Statistical Concepts</li>
      <li>Optimization Principles</li>
      <li>Advanced Calculus Techniques</li>
      <li>Multivariate Analysis</li>
      <li>Statistical Modeling</li>
      <li>Numerical Methods</li>
    </ul>
  `,
  dsProg: `
    <h2>Programming with Python</h2>
    <p>Learn Python for data science:</p>
    <ul>
      <li>Python Basics and Syntax</li>
      <li>Data Types and Structures Usage</li>
      <li>Control Flow and Functions Mastery</li>
      <li>Data Science Libraries (NumPy, Pandas)</li>
      <li>File Handling and Data Manipulation</li>
      <li>Object-Oriented Programming (OOP)</li>
      <li>Web Scraping with Python</li>
      <li>Testing and Debugging</li>
      <li>Version Control with Git</li>
    </ul>
  `,
  dsStats: `
    <h2>Statistics and Probability</h2>
    <p>Master statistical concepts for data analysis:</p>
    <ul>
      <li>Descriptive Statistics Exploration</li>
      <li>Inferential Statistics Understanding</li>
      <li>Hypothesis Testing Techniques</li>
      <li>Probability Distributions Overview</li>
      <li>Regression Analysis Principles</li>
      <li>Experimental Design</li>
      <li>Statistical Inference</li>
      <li>Bayesian Statistics</li>
      <li>Time Series Analysis</li>
    </ul>
  `,
  dsML: `
    <h2>Machine Learning Basics</h2>
    <p>Introduction to machine learning:</p>
    <ul>
      <li>Supervised Learning Fundamentals</li>
      <li>Unsupervised Learning Exploration</li>
      <li>Feature Engineering Techniques</li>
      <li>Model Evaluation Strategies</li>
      <li>Ensemble Learning Concepts</li>
      <li>Neural Networks and Deep Learning</li>
      <li>Dimensionality Reduction</li>
      <li>Natural Language Processing (NLP)</li>
      <li>Reinforcement Learning Basics</li>
    </ul>
  `,
  dsDL: `
    <h2>Deep Learning Fundamentals</h2>
    <p>Delve into deep learning techniques:</p>
    <ul>
      <li>Neural Networks Overview</li>
      <li>Convolutional Neural Networks (CNN)</li>
      <li>Recurrent Neural Networks (RNN)</li>
      <li>Transfer Learning Insights</li>
      <li>Generative Adversarial Networks (GAN)</li>
      <li>Autoencoders and Variational Autoencoders</li>
      <li>Hyperparameter Tuning</li>
      <li>TensorFlow and Keras</li>
      <li>Deployment Considerations</li>
    </ul>
  `,
  dsViz: `
    <h2>Data Visualization Techniques</h2>
    <p>Communicate insights through effective visualization:</p>
    <ul>
      <li>Introduction to Data Visualization</li>
      <li>Matplotlib and Seaborn Tools Usage</li>
      <li>Interactive Visualization with Plotly</li>
      <li>Dashboards and Storytelling Skills</li>
      <li>Geospatial Data Visualization</li>
      <li>Network Data Visualization</li>
      <li>Big Data Visualization</li>
      <li>Visualization Best Practices</li>
      <li>Data Ethics and Visualization</li>
    </ul>
  `,
  dsSQL: `
    <h2>SQL for Data Science</h2>
    <p>Master SQL for data manipulation and analysis:</p>
    <ul>
      <li>Database Basics Understanding</li>
      <li>SQL Queries Mastery</li>
      <li>Joins and Subqueries Techniques</li>
      <li>Database Design Principles</li>
      <li>Data Extraction and Transformation</li>
      <li>Advanced SQL Concepts</li>
      <li>Indexing and Query Optimization</li>
      <li>NoSQL Databases Overview</li>
      <li>Data Warehousing and OLAP</li>
    </ul>
  `,
  dsProj: `
    <h2>Real-world Projects</h2>
    <p>Apply skills to real-world data science projects:</p>
    <ul>
      <li>Project Planning and Scope Management</li>
      <li>Data Collection and Cleaning Strategies</li>
      <li>Exploratory Data Analysis (EDA)</li>
      <li>Model Building and Evaluation Techniques</li>
      <li>Deployment and Presentation Skills</li>
      <li>Client Interaction and Communication</li>
      <li>Agile Project Management</li>
      <li>Ethical Considerations in Data Science</li>
      <li>Continuous Learning and Professional Development</li>
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
