const questions = [
  {
    chapter: "Chapter 1",
    id: 1,
    category: "Marketing Basics",
    question: "What is marketing according to the American Marketing Association?",
    answers: [
      "Managing company profits only",
      "Creating communicating delivering and exchanging offerings that have value",
      "Selling products through advertising",
      "Distributing goods to retailers"
    ],
    correct: 1
  },

  {
    chapter: "Chapter 1",
    id: 2,
    category: "Marketing Basics",
    question: "Which of the following is one facet of marketing?",
    answers: [
      "Avoiding customer relationships",
      "Delivering value and benefits to customers",
      "Reducing communication with stakeholders",
      "Focusing only on production"
    ],
    correct: 1
  },

  {
    chapter: "Chapter 1",
    id: 3,
    category: "Marketing Basics",
    question: "Marketing involves building what type of relationships?",
    answers: [
      "Temporary relationships",
      "Competitive relationships",
      "Long term mutually rewarding relationships",
      "One sided relationships"
    ],
    correct: 2
  },

  {
    chapter: "Chapter 1",
    id: 4,
    category: "Stakeholders",
    question: "Which group is considered a stakeholder partner in marketing?",
    answers: [
      "Employees",
      "Suppliers",
      "Stockholders",
      "All of the above"
    ],
    correct: 3
  },

  {
    chapter: "Chapter 1",
    id: 5,
    category: "Exchange",
    question: "What is required for an exchange to occur?",
    answers: [
      "Government approval",
      "Advertising only",
      "An agreement between two parties",
      "A written contract"
    ],
    correct: 2
  },

  {
    chapter: "Chapter 1",
    id: 6,
    category: "Exchange",
    question: "How many parties must be involved in an exchange?",
    answers: [
      "1",
      "2",
      "3",
      "4"
    ],
    correct: 1
  },

  {
    chapter: "Chapter 1",
    id: 7,
    category: "Exchange",
    question: "Which condition is necessary for exchange?",
    answers: [
      "Each party must be forced to accept the offer",
      "Something of value must be present",
      "Only one party can communicate",
      "Money must always be exchanged"
    ],
    correct: 1
  },

  {
    chapter: "Chapter 1",
    id: 8,
    category: "Exchange",
    question: "In an exchange each party must be free to:",
    answers: [
      "Set government regulations",
      "Reject or accept the offer",
      "Create the product",
      "Control pricing"
    ],
    correct: 1
  },

  {
    chapter: "Chapter 1",
    id: 9,
    category: "Exchange",
    question: "Marketing can occur even if:",
    answers: [
      "No exchange takes place",
      "Products are unavailable",
      "Customers refuse communication",
      "The company has no employees"
    ],
    correct: 0
  },

  {
    chapter: "Chapter 1",
    id: 10,
    category: "Marketing Philosophies",
    question: "Which marketing orientation focuses on internal capabilities of the firm?",
    answers: [
      "Sales orientation",
      "Market orientation",
      "Production orientation",
      "Societal orientation"
    ],
    correct: 2
  },

  {
    chapter: "Chapter 1",
    id: 11,
    category: "Marketing Philosophies",
    question: "Which orientation believes high sales result in high profits?",
    answers: [
      "Production orientation",
      "Societal orientation",
      "Market orientation",
      "Sales orientation"
    ],
    correct: 3
  },

  {
    chapter: "Chapter 1",
    id: 12,
    category: "Marketing Philosophies",
    question: "Which orientation focuses on satisfying customer wants and needs while meeting organizational objectives?",
    answers: [
      "Sales orientation",
      "Production orientation",
      "Market orientation",
      "Societal orientation"
    ],
    correct: 2
  },

  {
    chapter: "Chapter 1",
    id: 13,
    category: "Marketing Philosophies",
    question: "Which orientation focuses on customer wants and societal well being?",
    answers: [
      "Production orientation",
      "Societal orientation",
      "Sales orientation",
      "Market orientation"
    ],
    correct: 1
  },

  {
    chapter: "Chapter 1",
    id: 14,
    category: "Marketing Philosophies",
    question: "Henry Ford's Model T strategy is an example of:",
    answers: [
      "Societal orientation",
      "Sales orientation",
      "Production orientation",
      "Market orientation"
    ],
    correct: 2
  },

  {
    chapter: "Chapter 1",
    id: 15,
    category: "Sales vs Market Orientation",
    question: "A sales oriented firm is generally:",
    answers: [
      "Outward looking",
      "Customer focused",
      "Inward looking",
      "Relationship focused"
    ],
    correct: 2
  },

  {
    chapter: "Chapter 1",
    id: 16,
    category: "Sales vs Market Orientation",
    question: "A market oriented firm focuses primarily on:",
    answers: [
      "Aggressive selling",
      "Internal operations",
      "What the market wants",
      "Reducing prices"
    ],
    correct: 2
  },

  {
    chapter: "Chapter 1",
    id: 17,
    category: "Customer Value",
    question: "Customer value is best described as:",
    answers: [
      "High quality only",
      "Low price only",
      "The relationship between benefits and sacrifice",
      "Advertising effectiveness"
    ],
    correct: 2
  },

  {
    chapter: "Chapter 1",
    id: 18,
    category: "Customer Value",
    question: "Which of the following is a customer value requirement?",
    answers: [
      "Offer unrealistic pricing",
      "Avoid after sales support",
      "Earn customer trust",
      "Limit communication"
    ],
    correct: 2
  },

  {
    chapter: "Chapter 1",
    id: 19,
    category: "Customer Value",
    question: "Successful companies create customer value by:",
    answers: [
      "Ignoring customer expectations",
      "Providing products customers value",
      "Eliminating customer service",
      "Avoiding innovation"
    ],
    correct: 1
  },

  {
    chapter: "Chapter 1",
    id: 20,
    category: "Customer Satisfaction",
    question: "Customer satisfaction is a customer's evaluation of whether a product:",
    answers: [
      "Has met needs and expectations",
      "Is the cheapest option",
      "Was heavily advertised",
      "Has the best packaging"
    ],
    correct: 0
  },

  {
    chapter: "Chapter 1",
    id: 21,
    category: "Relationship Marketing",
    question: "Relationship marketing focuses on:",
    answers: [
      "Short term profits only",
      "Keeping and improving customer relationships",
      "Reducing customer interaction",
      "Aggressive selling"
    ],
    correct: 1
  },

  {
    chapter: "Chapter 1",
    id: 22,
    category: "CRM",
    question: "CRM stands for:",
    answers: [
      "Consumer Revenue Management",
      "Customer Relationship Management",
      "Corporate Retail Marketing",
      "Customer Retention Method"
    ],
    correct: 1
  },

  {
    chapter: "Chapter 1",
    id: 23,
    category: "CRM",
    question: "Customer Relationship Management is designed to optimize:",
    answers: [
      "Production only",
      "Advertising expenses",
      "Profitability revenue and customer satisfaction",
      "Distribution costs"
    ],
    correct: 2
  },

  {
    chapter: "Chapter 1",
    id: 24,
    category: "On Demand Marketing",
    question: "On demand marketing delivers:",
    answers: [
      "Mass advertising only",
      "Relevant experiences throughout the buying process",
      "Products without customer input",
      "Retail only communication"
    ],
    correct: 1
  },

  {
    chapter: "Chapter 1",
    id: 25,
    category: "Sales Orientation",
    question: "Sales oriented organizations seek profitability primarily through:",
    answers: [
      "Sales volume",
      "Customer relationships",
      "Customer feedback",
      "Market research"
    ],
    correct: 0
  },

  {
    chapter: "Chapter 1",
    id: 26,
    category: "Market Orientation",
    question: "Market oriented organizations make profits by:",
    answers: [
      "Aggressive selling only",
      "Creating customer value and satisfaction",
      "Reducing employee involvement",
      "Focusing only on production"
    ],
    correct: 1
  },

  {
    chapter: "Chapter 1",
    id: 27,
    category: "Marketing Mix",
    question: "Market oriented firms recognize promotion as:",
    answers: [
      "The only important marketing activity",
      "One of four basic marketing mix decisions",
      "Unnecessary for success",
      "A replacement for customer value"
    ],
    correct: 1
  },

  {
    chapter: "Chapter 1",
    id: 28,
    category: "Why Study Marketing",
    question: "Why is marketing important to society?",
    answers: [
      "It affects people every day",
      "It eliminates competition",
      "It reduces innovation",
      "It replaces management"
    ],
    correct: 0
  },

  {
    chapter: "Chapter 1",
    id: 29,
    category: "Why Study Marketing",
    question: "Which is a reason to study marketing?",
    answers: [
      "Limited career opportunities",
      "No business impact",
      "Good career opportunities",
      "Marketing is unrelated to society"
    ],
    correct: 2
  },

  {
    chapter: "Chapter 1",
    id: 30,
    category: "Key Terms",
    question: "What is the marketing concept primarily focused on?",
    answers: [
      "Aggressive sales",
      "Internal production efficiency",
      "Customer satisfaction",
      "Reducing employee involvement"
    ],
    correct: 2
  },

  {
    chapter: "Chapter 1",
    id: 31,
    category: "Key Terms",
    question: "Market orientation is another term closely related to:",
    answers: [
      "Marketing concept",
      "Production orientation",
      "Sales orientation",
      "Exchange process"
    ],
    correct: 0
  },

  {
    chapter: "Chapter 1",
    id: 32,
    category: "Key Terms",
    question: "Societal marketing orientation adds concern for:",
    answers: [
      "Employee salaries",
      "Societal well being",
      "Factory production",
      "Sales quotas"
    ],
    correct: 1
  },

  {
    chapter: "Chapter 1",
    id: 33,
    category: "Key Terms",
    question: "Empowerment in organizations generally refers to:",
    answers: [
      "Giving employees more authority and responsibility",
      "Reducing teamwork",
      "Eliminating communication",
      "Focusing only on management"
    ],
    correct: 0
  },

  {
    chapter: "Chapter 1",
    id: 34,
    category: "Key Terms",
    question: "Teamwork in marketing organizations helps improve:",
    answers: [
      "Customer satisfaction",
      "Communication barriers",
      "Product shortages",
      "Employee isolation"
    ],
    correct: 0
  },

  {
    chapter: "Chapter 1",
    id: 35,
    category: "Examples",
    question: "Which company was listed as an example of delivering superior customer value?",
    answers: [
      "Amazon",
      "Kodak",
      "Blockbuster",
      "MySpace"
    ],
    correct: 0
  },

  {
    chapter: "Chapter 1",
    id: 36,
    category: "Examples",
    question: "Which company was identified as an example of societal orientation?",
    answers: [
      "The Body Shop",
      "Henry Ford",
      "Dot com businesses",
      "Dell"
    ],
    correct: 0
  },

  {
    chapter: "Chapter 1",
    id: 37,
    category: "Examples",
    question: "Ritz Carlton Hotels was used as an example of which orientation?",
    answers: [
      "Market orientation",
      "Production orientation",
      "Sales orientation",
      "Societal orientation"
    ],
    correct: 0
  },

  {
    chapter: "Chapter 1",
    id: 38,
    category: "Concepts",
    question: "Which philosophy is most customer focused?",
    answers: [
      "Sales orientation",
      "Market orientation",
      "Production orientation",
      "Aggressive orientation"
    ],
    correct: 1
  },

  {
    chapter: "Chapter 1",
    id: 39,
    category: "Concepts",
    question: "An outward looking company is most likely:",
    answers: [
      "Market oriented",
      "Production oriented",
      "Sales oriented",
      "Internally focused"
    ],
    correct: 0
  },

  {
    chapter: "Chapter 1",
    id: 40,
    category: "Concepts",
    question: "The main purpose of marketing is to:",
    answers: [
      "Maximize production only",
      "Create value for customers and society",
      "Eliminate competition",
      "Increase advertising costs"
    ],
    correct: 1
  },
  {
  chapter: "Chapter 2",
  id: 1,
  category: "Strategic Planning",
  question: "What is strategic planning?",
  answers: [
    "Short term promotional scheduling",
    "Creating and maintaining a fit between objectives resources and market opportunities",
    "Reducing employee responsibilities",
    "Setting product prices only"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 2,
  category: "Strategic Planning",
  question: "The primary goal of strategic planning is:",
  answers: [
    "Lower advertising costs",
    "Long run profitability and growth",
    "Reducing competition",
    "Increasing production only"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 3,
  category: "Strategic Planning",
  question: "Strategic decisions usually require:",
  answers: [
    "Short term thinking only",
    "Long term commitments of resources",
    "No financial investment",
    "Minimal planning"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 4,
  category: "SBU",
  question: "What does SBU stand for?",
  answers: [
    "Strategic Business Unit",
    "Sales Business Utility",
    "System Business Unit",
    "Strategic Brand Utility"
  ],
  correct: 0
},

{
  chapter: "Chapter 2",
  id: 5,
  category: "SBU",
  question: "Which characteristic describes a strategic business unit?",
  answers: [
    "No competitors",
    "Distinct mission and target market",
    "Shared resources with all divisions",
    "No independent planning"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 6,
  category: "SBU",
  question: "An SBU should:",
  answers: [
    "Depend fully on other SBUs",
    "Have control over its resources",
    "Avoid target markets",
    "Focus only on sales"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 7,
  category: "Ansoff Matrix",
  question: "Ansoff's Opportunity Matrix matches:",
  answers: [
    "Employees with departments",
    "Products with markets",
    "Prices with suppliers",
    "Promotions with budgets"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 8,
  category: "Ansoff Matrix",
  question: "Market penetration involves:",
  answers: [
    "Selling existing products in existing markets",
    "Selling new products in new markets",
    "Leaving current markets",
    "Buying competitors"
  ],
  correct: 0
},

{
  chapter: "Chapter 2",
  id: 9,
  category: "Ansoff Matrix",
  question: "Opening stores in new countries is an example of:",
  answers: [
    "Market penetration",
    "Product development",
    "Diversification",
    "Market development"
  ],
  correct: 3
},

{
  chapter: "Chapter 2",
  id: 10,
  category: "Ansoff Matrix",
  question: "Introducing new products to current markets is called:",
  answers: [
    "Market development",
    "Diversification",
    "Product development",
    "Harvesting"
  ],
  correct: 2
},

{
  chapter: "Chapter 2",
  id: 11,
  category: "Ansoff Matrix",
  question: "Diversification occurs when a company:",
  answers: [
    "Sells current products to current customers",
    "Introduces new products into new markets",
    "Reduces its product line",
    "Lowers prices"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 12,
  category: "Portfolio Matrix",
  question: "A star in the portfolio matrix is:",
  answers: [
    "A low growth low share product",
    "A fast growing market leader",
    "A declining product",
    "A weak competitor"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 13,
  category: "Portfolio Matrix",
  question: "Stars usually require:",
  answers: [
    "No investment",
    "Large amounts of cash to finance growth",
    "Immediate divestment",
    "Elimination from the market"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 14,
  category: "Portfolio Matrix",
  question: "A cash cow:",
  answers: [
    "Has low market share in a growing market",
    "Generates more cash than it needs",
    "Requires heavy investment",
    "Should immediately be divested"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 15,
  category: "Portfolio Matrix",
  question: "A problem child is characterized by:",
  answers: [
    "High growth and low market share",
    "Low growth and high market share",
    "High profits and low growth",
    "Market dominance"
  ],
  correct: 0
},

{
  chapter: "Chapter 2",
  id: 16,
  category: "Portfolio Matrix",
  question: "A dog in the portfolio matrix has:",
  answers: [
    "High growth potential",
    "Strong market share",
    "Low growth potential and small market share",
    "Large profits"
  ],
  correct: 2
},

{
  chapter: "Chapter 2",
  id: 17,
  category: "Resource Allocation",
  question: "Which strategy is best for an SBU with star potential?",
  answers: [
    "Divest",
    "Harvest",
    "Build",
    "Reduce"
  ],
  correct: 2
},

{
  chapter: "Chapter 2",
  id: 18,
  category: "Resource Allocation",
  question: "Which strategy focuses on preserving market share?",
  answers: [
    "Harvest",
    "Build",
    "Divest",
    "Hold"
  ],
  correct: 3
},

{
  chapter: "Chapter 2",
  id: 19,
  category: "Resource Allocation",
  question: "The harvest strategy aims to:",
  answers: [
    "Increase short term cash return",
    "Expand internationally",
    "Introduce new products",
    "Maximize long term growth"
  ],
  correct: 0
},

{
  chapter: "Chapter 2",
  id: 20,
  category: "Resource Allocation",
  question: "Divest means:",
  answers: [
    "Increasing advertising",
    "Holding market share",
    "Getting rid of weak SBUs",
    "Creating new products"
  ],
  correct: 2
},

{
  chapter: "Chapter 2",
  id: 21,
  category: "Marketing Plan",
  question: "A marketing plan is:",
  answers: [
    "A verbal discussion of marketing goals",
    "A written guidebook of marketing activities",
    "A sales quota document",
    "A product inventory sheet"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 22,
  category: "Marketing Plan",
  question: "Marketing planning is the basis for:",
  answers: [
    "All marketing strategies and decisions",
    "Accounting systems only",
    "Production schedules",
    "Employee salaries"
  ],
  correct: 0
},

{
  chapter: "Chapter 2",
  id: 23,
  category: "Mission Statement",
  question: "The foundation of a marketing plan is the:",
  answers: [
    "Sales forecast",
    "Promotion strategy",
    "Mission statement",
    "Distribution channel"
  ],
  correct: 2
},

{
  chapter: "Chapter 2",
  id: 24,
  category: "Mission Statement",
  question: "Marketing myopia occurs when a business:",
  answers: [
    "Defines itself too broadly",
    "Defines itself in terms of customer benefits",
    "Defines itself narrowly by products rather than benefits",
    "Focuses on social responsibility"
  ],
  correct: 2
},

{
  chapter: "Chapter 2",
  id: 25,
  category: "SWOT",
  question: "SWOT analysis examines:",
  answers: [
    "Sales and pricing only",
    "Strengths weaknesses opportunities and threats",
    "Promotion and advertising only",
    "Customer demographics only"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 26,
  category: "SWOT",
  question: "Strengths and weaknesses are considered:",
  answers: [
    "External factors",
    "Government regulations",
    "Internal factors",
    "Competitive threats"
  ],
  correct: 2
},

{
  chapter: "Chapter 2",
  id: 27,
  category: "SWOT",
  question: "Opportunities and threats are considered:",
  answers: [
    "Internal resources",
    "External environmental factors",
    "Accounting issues",
    "Employee evaluations"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 28,
  category: "SWOT",
  question: "Environmental scanning involves:",
  answers: [
    "Analyzing the marketing environment",
    "Counting inventory",
    "Testing products only",
    "Evaluating employee performance"
  ],
  correct: 0
},

{
  chapter: "Chapter 2",
  id: 29,
  category: "Competitive Advantage",
  question: "Competitive advantage is:",
  answers: [
    "A government requirement",
    "Factors causing customers to choose one firm over competitors",
    "Lower employee turnover",
    "A pricing regulation"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 30,
  category: "Competitive Advantage",
  question: "Which is a type of competitive advantage?",
  answers: [
    "Cost advantage",
    "Differentiation",
    "Niche advantage",
    "All of the above"
  ],
  correct: 3
},

{
  chapter: "Chapter 2",
  id: 31,
  category: "Competitive Advantage",
  question: "A sustainable competitive advantage:",
  answers: [
    "Can easily be copied",
    "Lasts until competitors imitate it",
    "Exists only in monopolies",
    "Requires no innovation"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 32,
  category: "Marketing Objectives",
  question: "A marketing objective is a:",
  answers: [
    "Statement of what marketing activities should accomplish",
    "List of employee tasks",
    "Pricing strategy",
    "Customer complaint report"
  ],
  correct: 0
},

{
  chapter: "Chapter 2",
  id: 33,
  category: "Marketing Objectives",
  question: "Marketing objectives help:",
  answers: [
    "Clarify executive thinking",
    "Motivate employees",
    "Provide direction",
    "All of the above"
  ],
  correct: 3
},

{
  chapter: "Chapter 2",
  id: 34,
  category: "Target Markets",
  question: "A target market strategy focuses on:",
  answers: [
    "Random customer groups",
    "Groups with similar characteristics",
    "Suppliers only",
    "Competitors"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 35,
  category: "Target Markets",
  question: "Appealing to one segment with one marketing mix is called:",
  answers: [
    "Concentrated targeting",
    "Mass diversification",
    "Harvesting",
    "Divesting"
  ],
  correct: 0
},

{
  chapter: "Chapter 2",
  id: 36,
  category: "MOA",
  question: "MOA stands for:",
  answers: [
    "Market Opportunity Analysis",
    "Marketing Operations Audit",
    "Market Objective Assessment",
    "Management Opportunity Analysis"
  ],
  correct: 0
},

{
  chapter: "Chapter 2",
  id: 37,
  category: "Marketing Mix",
  question: "The four Ps of marketing are:",
  answers: [
    "Planning people profit promotion",
    "Product place promotion price",
    "Price planning people promotion",
    "Product profit promotion planning"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 38,
  category: "Marketing Mix",
  question: "Which marketing mix element involves transportation and storage?",
  answers: [
    "Product",
    "Price",
    "Promotion",
    "Place"
  ],
  correct: 3
},

{
  chapter: "Chapter 2",
  id: 39,
  category: "Marketing Mix",
  question: "Which marketing mix element includes advertising and public relations?",
  answers: [
    "Promotion",
    "Price",
    "Place",
    "Product"
  ],
  correct: 0
},

{
  chapter: "Chapter 2",
  id: 40,
  category: "Marketing Mix",
  question: "Price represents:",
  answers: [
    "The value customers give up to obtain a product",
    "Advertising expenses",
    "Shipping costs only",
    "Production efficiency"
  ],
  correct: 0
},

{
  chapter: "Chapter 2",
  id: 41,
  category: "Marketing Mix",
  question: "Which of the four Ps is considered the most flexible?",
  answers: [
    "Product",
    "Place",
    "Promotion",
    "Price"
  ],
  correct: 3
},

{
  chapter: "Chapter 2",
  id: 42,
  category: "Implementation",
  question: "Implementation means:",
  answers: [
    "Creating customer surveys",
    "Turning marketing plans into action assignments",
    "Changing company ownership",
    "Writing mission statements"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 43,
  category: "Evaluation",
  question: "Evaluation measures:",
  answers: [
    "The extent marketing objectives are achieved",
    "Employee attendance",
    "Factory production speed",
    "Supplier performance only"
  ],
  correct: 0
},

{
  chapter: "Chapter 2",
  id: 44,
  category: "Control",
  question: "Control helps management:",
  answers: [
    "Allocate marketing resources efficiently",
    "Eliminate competition",
    "Avoid planning",
    "Ignore performance"
  ],
  correct: 0
},

{
  chapter: "Chapter 2",
  id: 45,
  category: "Marketing Audit",
  question: "A marketing audit is:",
  answers: [
    "A random evaluation",
    "A thorough systematic periodic evaluation",
    "A pricing adjustment",
    "A sales pitch"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 46,
  category: "Strategic Planning",
  question: "Effective strategic planning requires:",
  answers: [
    "Continual attention",
    "Creativity",
    "Management commitment",
    "All of the above"
  ],
  correct: 3
},

{
  chapter: "Chapter 2",
  id: 47,
  category: "Examples",
  question: "McDonald's all day breakfast is an example of:",
  answers: [
    "Diversification",
    "Market penetration",
    "Divestment",
    "Harvesting"
  ],
  correct: 1
},

{
  chapter: "Chapter 2",
  id: 48,
  category: "Examples",
  question: "Harley Davidson introducing motorcycles for women is an example of:",
  answers: [
    "Market development",
    "Product development",
    "Diversification",
    "Market penetration"
  ],
  correct: 2
},

{
  chapter: "Chapter 2",
  id: 49,
  category: "Concepts",
  question: "Marketing strategy creates:",
  answers: [
    "Mutually satisfying exchanges",
    "Only higher prices",
    "Reduced customer value",
    "Production monopolies"
  ],
  correct: 0
},

{
  chapter: "Chapter 2",
  id: 50,
  category: "Concepts",
  question: "The product is considered the starting point of the marketing mix because:",
  answers: [
    "Pricing is based on competitors",
    "Promotion and distribution depend on the product offering",
    "Advertising comes first",
    "Distribution is unrelated"
  ],
  correct: 1
},
  {
  chapter: "Chapter 4",
  id: 1,
  category: "Marketing Environment",
  question: "The external marketing environment includes:",
  answers: [
    "Only competitors",
    "Only customers",
    "Forces outside the firm that affect marketing decisions",
    "Only internal employees"
  ],
  correct: 2
},

{
  chapter: "Chapter 4",
  id: 2,
  category: "Marketing Environment",
  question: "Why is understanding the external environment important for marketing managers?",
  answers: [
    "To reduce product quality",
    "To plan for the future",
    "To eliminate competition",
    "To avoid customers"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 3,
  category: "Marketing Environment",
  question: "Environmental scanning is:",
  answers: [
    "Product testing",
    "Collecting and evaluating environmental information",
    "Setting prices",
    "Employee training"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 4,
  category: "Marketing Environment",
  question: "The goal of environmental scanning is to identify:",
  answers: [
    "Future market opportunities and threats",
    "Employee salaries",
    "Production schedules",
    "Distribution routes"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 5,
  category: "Social Factors",
  question: "Which external variable is most difficult for marketers to forecast?",
  answers: [
    "Technology",
    "Competition",
    "Social change",
    "Pricing"
  ],
  correct: 2
},

{
  chapter: "Chapter 4",
  id: 6,
  category: "Social Factors",
  question: "Social factors influence:",
  answers: [
    "Products consumers buy",
    "Prices consumers pay",
    "Where consumers shop",
    "All of the above"
  ],
  correct: 3
},

{
  chapter: "Chapter 4",
  id: 7,
  category: "Core American Values",
  question: "Which is considered a core American value?",
  answers: [
    "Collectivism",
    "Individualism",
    "Isolation",
    "Dependency"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 8,
  category: "Core American Values",
  question: "Self sufficiency means:",
  answers: [
    "Depending on others",
    "Every person should stand on their own feet",
    "Avoiding work",
    "Following trends"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 9,
  category: "Core American Values",
  question: "Upward mobility refers to the belief that success comes from:",
  answers: [
    "Luck only",
    "Working hard and education",
    "Government support",
    "Inheritance"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 10,
  category: "Core American Values",
  question: "The work ethic emphasizes:",
  answers: [
    "Avoiding responsibility",
    "Hard work and dedication",
    "Minimal effort",
    "Entertainment"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 11,
  category: "Core American Values",
  question: "Achievement orientation focuses on:",
  answers: [
    "Avoiding goals",
    "Setting goals and measuring results",
    "Reducing productivity",
    "Working alone"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 12,
  category: "Values",
  question: "Values are best described as:",
  answers: [
    "Temporary preferences",
    "Strongly held and enduring beliefs",
    "Government regulations",
    "Product features"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 13,
  category: "Values",
  question: "Values influence:",
  answers: [
    "Buying habits",
    "Only political opinions",
    "Factory production",
    "Import taxes"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 14,
  category: "Product Quality",
  question: "Which product quality characteristic ranks highest among U.S. consumers?",
  answers: [
    "Low price",
    "Ease of use",
    "Reliability",
    "Brand name"
  ],
  correct: 2
},

{
  chapter: "Chapter 4",
  id: 15,
  category: "Demographics",
  question: "Demography is the study of:",
  answers: [
    "Advertising trends",
    "People's vital statistics",
    "Pricing systems",
    "Retail stores"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 16,
  category: "Demographics",
  question: "Population is considered:",
  answers: [
    "The basic statistic in marketing",
    "A political factor only",
    "An internal company resource",
    "A pricing strategy"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 17,
  category: "Demographics",
  question: "Demographic characteristics are related to:",
  answers: [
    "Consumer buying behavior",
    "Manufacturing costs",
    "Supply chains",
    "Tax regulations"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 18,
  category: "Ethnic Markets",
  question: "Which ethnic market is the largest user of mobile device transactions?",
  answers: [
    "Asian Americans",
    "African Americans",
    "Hispanic Americans",
    "European Americans"
  ],
  correct: 2
},

{
  chapter: "Chapter 4",
  id: 19,
  category: "Ethnic Markets",
  question: "African Americans are known for:",
  answers: [
    "Avoiding technology",
    "Strong influence on trends",
    "Low social awareness",
    "Limited buying power"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 20,
  category: "Ethnic Markets",
  question: "Asian Americans are often:",
  answers: [
    "Late adopters of technology",
    "Early adopters of digital gadgets",
    "Focused only on retail",
    "Avoiding education"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 21,
  category: "Ethnic Markets",
  question: "Hispanics are more likely to choose brands that:",
  answers: [
    "Ignore culture",
    "Reflect their values and culture",
    "Use the lowest prices only",
    "Avoid mobile marketing"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 22,
  category: "Economic Factors",
  question: "Which is an economic factor affecting marketing?",
  answers: [
    "Inflation",
    "Purchasing power",
    "Recession",
    "All of the above"
  ],
  correct: 3
},

{
  chapter: "Chapter 4",
  id: 23,
  category: "Purchasing Power",
  question: "Purchasing power is measured by comparing:",
  answers: [
    "Income to cost of living",
    "Sales to profits",
    "Employees to customers",
    "Imports to exports"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 24,
  category: "Purchasing Power",
  question: "Cost of living includes:",
  answers: [
    "Housing and food",
    "Transportation and utilities",
    "Healthcare and entertainment",
    "All of the above"
  ],
  correct: 3
},

{
  chapter: "Chapter 4",
  id: 25,
  category: "Purchasing Power",
  question: "Consumers with high purchasing power can:",
  answers: [
    "Buy higher priced necessities",
    "Avoid all expenses",
    "Ignore inflation",
    "Reduce product demand"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 26,
  category: "Inflation",
  question: "Inflation is:",
  answers: [
    "An increase in product reliability",
    "A decrease in the value of money",
    "A decrease in competition",
    "An increase in production"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 27,
  category: "Inflation",
  question: "Inflation is usually expressed as:",
  answers: [
    "A percentage reduction in value",
    "A product rating",
    "A company slogan",
    "A market share figure"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 28,
  category: "Recession",
  question: "A recession is characterized by:",
  answers: [
    "Positive economic growth",
    "Negative economic growth",
    "Higher inflation only",
    "Lower taxes"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 29,
  category: "Recession",
  question: "A recession reduces demand for:",
  answers: [
    "Goods and services",
    "Government policies",
    "Research studies",
    "Competitors"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 30,
  category: "GDP",
  question: "GDP stands for:",
  answers: [
    "General Distribution Product",
    "Gross Domestic Product",
    "Global Demand Pricing",
    "Government Development Policy"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 31,
  category: "Research",
  question: "Basic research aims to:",
  answers: [
    "Develop improved products only",
    "Confirm theories or learn more about concepts",
    "Reduce competition",
    "Increase prices"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 32,
  category: "Research",
  question: "Applied research focuses on:",
  answers: [
    "Learning theories only",
    "Developing new or improved products",
    "Reducing demographics",
    "Government regulations"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 33,
  category: "Technology",
  question: "Developing new technology internally helps firms:",
  answers: [
    "Reduce innovation",
    "Create long term competitive advantage",
    "Eliminate customers",
    "Avoid research"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 34,
  category: "Technology",
  question: "New technology can:",
  answers: [
    "Make existing products obsolete",
    "Reduce innovation",
    "Eliminate all competition",
    "Stop market growth"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 35,
  category: "Political and Legal Factors",
  question: "Government regulation helps protect:",
  answers: [
    "Consumers",
    "Society",
    "Innovators",
    "All of the above"
  ],
  correct: 3
},

{
  chapter: "Chapter 4",
  id: 36,
  category: "Political and Legal Factors",
  question: "Every aspect of the marketing mix is subject to:",
  answers: [
    "Laws and restrictions",
    "Only customer preferences",
    "Only employee opinions",
    "Random chance"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 37,
  category: "Regulatory Agencies",
  question: "The FDA stands for:",
  answers: [
    "Federal Drug Association",
    "Food and Drug Administration",
    "Food Distribution Agency",
    "Federal Distribution Administration"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 38,
  category: "Regulatory Agencies",
  question: "The FTC is responsible for:",
  answers: [
    "Preventing unfair competition",
    "Building highways",
    "Managing inflation",
    "Creating advertising"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 39,
  category: "Regulatory Agencies",
  question: "The CPSC focuses on:",
  answers: [
    "Consumer health and safety",
    "Export regulations",
    "Interest rates",
    "Import quotas"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 40,
  category: "FTC",
  question: "Which FTC bureau reviews mergers and acquisitions?",
  answers: [
    "Bureau of Consumer Protection",
    "Bureau of Competition",
    "Bureau of Demographics",
    "Bureau of Technology"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 41,
  category: "Consumer Privacy",
  question: "The CAN-SPAM Act regulates:",
  answers: [
    "Television ads",
    "Unsolicited email advertising",
    "Product packaging",
    "Retail pricing"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 42,
  category: "Consumer Privacy",
  question: "The Children's Online Privacy Protection Act requires:",
  answers: [
    "Websites to post privacy policies",
    "Lower prices for children",
    "More television advertising",
    "Government ownership of websites"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 43,
  category: "Competition",
  question: "Global competition means:",
  answers: [
    "Foreign firms entering U.S. markets",
    "No domestic competition",
    "Reduced innovation",
    "Elimination of imports"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 44,
  category: "Competition",
  question: "Foreign firms now compete heavily on:",
  answers: [
    "Product quality",
    "Government regulation",
    "Population growth",
    "Transportation only"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 45,
  category: "Competition",
  question: "Technological advances can:",
  answers: [
    "Create new competitors",
    "Reduce innovation",
    "End market demand",
    "Eliminate customer needs"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 46,
  category: "Marketing Concepts",
  question: "Managers alter the marketing mix based on:",
  answers: [
    "How consumers make purchasing decisions",
    "Employee hobbies",
    "Government ownership",
    "Random trends"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 47,
  category: "Marketing Concepts",
  question: "Demography is considered:",
  answers: [
    "A controllable internal variable",
    "An uncontrollable external variable",
    "A pricing strategy",
    "A promotional tool"
  ],
  correct: 1
},

{
  chapter: "Chapter 4",
  id: 48,
  category: "Marketing Concepts",
  question: "Technological success is based on:",
  answers: [
    "Innovation",
    "Reduced competition",
    "Higher taxes",
    "Advertising only"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 49,
  category: "Marketing Concepts",
  question: "Innovation requires:",
  answers: [
    "Risk taking and imagination",
    "Lower education",
    "Reduced technology",
    "Government ownership"
  ],
  correct: 0
},

{
  chapter: "Chapter 4",
  id: 50,
  category: "Marketing Concepts",
  question: "Managers have little control over the:",
  answers: [
    "Competitive environment",
    "Marketing mix",
    "Pricing strategy",
    "Promotion schedule"
  ],
  correct: 0
},
  {
  chapter: "Chapter 5",
  id: 1,
  category: "Global Marketing",
  question: "Global marketing means:",
  answers: [
    "Selling products only in domestic markets",
    "Targeting markets throughout the world",
    "Producing only luxury products",
    "Avoiding international trade"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 2,
  category: "Global Vision",
  question: "Global vision refers to:",
  answers: [
    "Ignoring foreign competitors",
    "Recognizing and reacting to international marketing opportunities",
    "Producing goods locally only",
    "Avoiding foreign investments"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 3,
  category: "GDP",
  question: "Gross Domestic Product (GDP) is:",
  answers: [
    "The value of imports only",
    "The total market value of all final goods and services produced in a country",
    "The number of exports sold globally",
    "The amount of taxes collected"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 4,
  category: "Global Trade",
  question: "Over the past decades world trade has:",
  answers: [
    "Declined significantly",
    "Stayed the same",
    "Increased dramatically",
    "Stopped growing"
  ],
  correct: 2
},
{
  chapter: "Chapter 5",
  id: 5,
  category: "Outsourcing",
  question: "Outsourcing is:",
  answers: [
    "Hiring more domestic workers",
    "Sending U.S. jobs abroad",
    "Increasing local manufacturing",
    "Buying foreign products"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 6,
  category: "Inshoring",
  question: "Inshoring refers to:",
  answers: [
    "Moving jobs overseas",
    "Returning production jobs to the United States",
    "Reducing innovation",
    "Outsourcing customer service"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 7,
  category: "Globalization",
  question: "One benefit of globalization is that it:",
  answers: [
    "Reduces competition",
    "Raises productivity and living standards",
    "Eliminates exports",
    "Stops innovation"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 8,
  category: "Globalization",
  question: "One criticism of globalization is that it:",
  answers: [
    "Creates too many local jobs",
    "Causes some workers to lose jobs",
    "Decreases trade barriers",
    "Increases productivity"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 9,
  category: "Trade Barriers",
  question: "Countries create trade barriers mainly to:",
  answers: [
    "Boost exports and limit imports",
    "Encourage outsourcing",
    "Reduce productivity",
    "Eliminate domestic industries"
  ],
  correct: 0
},
{
  chapter: "Chapter 5",
  id: 10,
  category: "Multinational Corporations",
  question: "A multinational corporation operates:",
  answers: [
    "Only in one country",
    "Across national boundaries",
    "Only online",
    "Only in Europe"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 11,
  category: "Multinationals",
  question: "One advantage of multinational corporations is that they:",
  answers: [
    "Reduce wages globally",
    "Spend heavily on research and development",
    "Avoid innovation",
    "Limit trade"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 12,
  category: "Multinationals",
  question: "One criticism of multinational corporations is that they may:",
  answers: [
    "Generate too much competition",
    "Take away more wealth than they generate",
    "Eliminate technology",
    "Avoid foreign markets"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 13,
  category: "Global Standardization",
  question: "Global marketing standardization means:",
  answers: [
    "Producing uniform products sold similarly worldwide",
    "Customizing every product for each country",
    "Selling only local products",
    "Avoiding global advertising"
  ],
  correct: 0
},
{
  chapter: "Chapter 5",
  id: 14,
  category: "Multidomestic Strategy",
  question: "A multidomestic strategy allows subsidiaries to:",
  answers: [
    "Operate independently in domestic markets",
    "Sell identical products globally",
    "Avoid competition",
    "Stop adapting products"
  ],
  correct: 0
},
{
  chapter: "Chapter 5",
  id: 15,
  category: "Culture",
  question: "A company without understanding of a country's culture is likely to:",
  answers: [
    "Increase profits immediately",
    "Fail in the market",
    "Avoid competition",
    "Reduce costs"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 16,
  category: "Language",
  question: "Language is important in global marketing because it affects:",
  answers: [
    "Only pricing",
    "Product names and promotional messages",
    "Only transportation",
    "Manufacturing costs only"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 17,
  category: "Economic Development",
  question: "Complex and sophisticated industries are commonly found in:",
  answers: [
    "Less developed nations",
    "Developed countries",
    "Rural villages only",
    "Countries without trade"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 18,
  category: "Political Structure",
  question: "Government policies in different countries can affect:",
  answers: [
    "Only exports",
    "International marketing operations",
    "Only advertising",
    "Only local sales"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 19,
  category: "Global Entry",
  question: "The simplest method of entering global markets is often:",
  answers: [
    "Joint venture",
    "Exporting",
    "Direct foreign investment",
    "Licensing"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 20,
  category: "Exporting",
  question: "Exporting means:",
  answers: [
    "Importing foreign products",
    "Selling products to foreign markets",
    "Producing only domestically",
    "Avoiding global trade"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 21,
  category: "Licensing",
  question: "Licensing allows a foreign company to:",
  answers: [
    "Use another firm's technology or brand legally",
    "Avoid paying royalties",
    "Eliminate imports",
    "Create trade barriers"
  ],
  correct: 0
},
{
  chapter: "Chapter 5",
  id: 22,
  category: "Joint Venture",
  question: "A joint venture is:",
  answers: [
    "A partnership between firms",
    "A government tax policy",
    "A type of export tariff",
    "A domestic monopoly"
  ],
  correct: 0
},
{
  chapter: "Chapter 5",
  id: 23,
  category: "Foreign Investment",
  question: "Direct foreign investment involves:",
  answers: [
    "Selling products online only",
    "Investing directly in foreign operations",
    "Avoiding international markets",
    "Reducing ownership"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 24,
  category: "Marketing Mix",
  question: "One challenge in global distribution is:",
  answers: [
    "Finding the right franchise and infrastructure",
    "Eliminating transportation",
    "Avoiding local markets",
    "Reducing communication"
  ],
  correct: 0
},
{
  chapter: "Chapter 5",
  id: 25,
  category: "Pricing",
  question: "Exchange rates refer to:",
  answers: [
    "Tax rates in a country",
    "The price of one country's currency in terms of another",
    "Only stock market values",
    "Manufacturing costs"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 26,
  category: "Dumping",
  question: "Dumping occurs when a company:",
  answers: [
    "Sells products below home market prices in foreign markets",
    "Raises prices globally",
    "Eliminates exports",
    "Stops production"
  ],
  correct: 0
},
{
  chapter: "Chapter 5",
  id: 27,
  category: "Countertrade",
  question: "Countertrade is:",
  answers: [
    "Paying entirely with money",
    "Trading goods or services for other goods or services",
    "Avoiding imports",
    "Reducing tariffs"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 28,
  category: "E-Commerce",
  question: "Opening an e-commerce site allows a company to:",
  answers: [
    "Enter the international marketplace",
    "Avoid global competition",
    "Reduce communication",
    "Eliminate exports"
  ],
  correct: 0
},
{
  chapter: "Chapter 5",
  id: 29,
  category: "Social Media",
  question: "Global marketers use social media mainly to:",
  answers: [
    "Reduce customer interaction",
    "Understand customers and build brands",
    "Avoid advertising",
    "Limit communication"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 30,
  category: "Trade Organizations",
  question: "WTO stands for:",
  answers: [
    "World Trade Organization",
    "Worldwide Tariff Office",
    "World Transport Operation",
    "Western Trade Organization"
  ],
  correct: 0
},
{
  chapter: "Chapter 5",
  id: 31,
  category: "Trade Agreements",
  question: "NAFTA was a trade agreement involving:",
  answers: [
    "Only Europe",
    "North America",
    "South America only",
    "Asia only"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 32,
  category: "Trade Agreements",
  question: "The European Union (EU) is an example of:",
  answers: [
    "A military alliance",
    "An economic and political trade group",
    "A nonprofit organization",
    "A social media company"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 33,
  category: "External Environment",
  question: "Which is part of the external environment faced by global marketers?",
  answers: [
    "Culture",
    "Natural resources",
    "Political structure",
    "All of the above"
  ],
  correct: 3
},
{
  chapter: "Chapter 5",
  id: 34,
  category: "Globalization",
  question: "Traditional economic theory says globalization relies on:",
  answers: [
    "Government control only",
    "Competition to improve quality and lower prices",
    "Reduced trade",
    "Limited technology"
  ],
  correct: 1
},
{
  chapter: "Chapter 5",
  id: 35,
  category: "Global Marketing",
  question: "One major reason companies decide to go global is to:",
  answers: [
    "Reduce innovation",
    "Earn additional profits",
    "Avoid competition",
    "Limit production"
  ],
  correct: 1
},
  {
  chapter: "Chapter 6",
  id: 1,
  category: "Consumer Behavior",
  question: "Consumer behavior refers to how consumers:",
  answers: [
    "Produce products",
    "Make purchase decisions and use goods and services",
    "Manage factories",
    "Set company prices"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 2,
  category: "Consumer Decision Process",
  question: "The consumer decision-making process is best described as:",
  answers: [
    "A one-step process",
    "A five-step process consumers use when buying goods or services",
    "A process only businesses use",
    "A financial planning system"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 3,
  category: "Consumer Decision Process",
  question: "Consumers may end the decision-making process:",
  answers: [
    "Only after purchasing",
    "At any time without making a purchase",
    "Only after research",
    "Only after comparing prices"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 4,
  category: "Need Recognition",
  question: "The first step in the consumer decision-making process is:",
  answers: [
    "Purchase decision",
    "Need recognition",
    "Postpurchase evaluation",
    "Alternative evaluation"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 5,
  category: "Cognitive Dissonance",
  question: "Cognitive dissonance is:",
  answers: [
    "Consumer excitement before a purchase",
    "Inner tension after recognizing inconsistency between behavior and values",
    "A pricing strategy",
    "A type of advertising"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 6,
  category: "Cognitive Dissonance",
  question: "Consumers reduce cognitive dissonance by:",
  answers: [
    "Ignoring all information",
    "Seeking information that reinforces the purchase decision",
    "Buying unrelated products",
    "Avoiding purchases forever"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 7,
  category: "Buying Decisions",
  question: "Routine response behavior is associated with:",
  answers: [
    "Expensive and unfamiliar products",
    "Frequently purchased low-cost products",
    "Luxury purchases only",
    "Rarely purchased products"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 8,
  category: "Buying Decisions",
  question: "Limited decision making occurs when consumers:",
  answers: [
    "Have no product experience",
    "Have product experience but are unfamiliar with current brands",
    "Buy products automatically",
    "Never compare alternatives"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 9,
  category: "Buying Decisions",
  question: "Extensive decision making usually applies to:",
  answers: [
    "Cheap everyday items",
    "Unfamiliar or expensive products",
    "Candy purchases",
    "Routine grocery shopping"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 10,
  category: "Involvement",
  question: "Involvement refers to the:",
  answers: [
    "Amount of money a consumer has",
    "Amount of time and effort invested in decision processes",
    "Number of advertisements seen",
    "Amount of product inventory"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 11,
  category: "Consumer Involvement",
  question: "Which factor increases consumer involvement?",
  answers: [
    "Low perceived risk",
    "High social visibility",
    "Routine purchases",
    "Familiarity with products"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 12,
  category: "Consumer Involvement",
  question: "As perceived risk increases consumers typically:",
  answers: [
    "Spend less effort researching",
    "Increase their level of involvement",
    "Ignore alternatives",
    "Purchase faster"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 13,
  category: "Marketing Implications",
  question: "High-involvement purchases require:",
  answers: [
    "Little promotion",
    "Extensive and informative promotion",
    "No advertising",
    "Only coupons"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 14,
  category: "Marketing Implications",
  question: "Low-involvement purchases rely heavily on:",
  answers: [
    "Technical manuals",
    "In-store promotion and eye-catching packaging",
    "Detailed contracts",
    "Personal interviews"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 15,
  category: "Culture",
  question: "Culture affects consumer buying decisions through:",
  answers: [
    "Shared values and behaviors",
    "Only pricing",
    "Only advertising",
    "Only income"
  ],
  correct: 0
},
{
  chapter: "Chapter 6",
  id: 16,
  category: "Subculture",
  question: "A subculture is:",
  answers: [
    "A completely separate culture",
    "A homogeneous group sharing unique cultural elements",
    "A government organization",
    "A social class"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 17,
  category: "Social Class",
  question: "Social class is commonly measured by:",
  answers: [
    "Occupation income and education",
    "Hair color",
    "Favorite foods",
    "Birth month"
  ],
  correct: 0
},
{
  chapter: "Chapter 6",
  id: 18,
  category: "Social Class",
  question: "Marketers use social class information to determine:",
  answers: [
    "Where to advertise and distribute products",
    "How to manufacture products",
    "Tax policies",
    "Company ownership"
  ],
  correct: 0
},
{
  chapter: "Chapter 6",
  id: 19,
  category: "Social Influences",
  question: "Consumers interact socially with others mainly to:",
  answers: [
    "Avoid products",
    "Obtain product information and approval",
    "Reduce inventory",
    "Increase production"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 20,
  category: "Reference Groups",
  question: "A reference group is important because it:",
  answers: [
    "Influences perceptions and behavior",
    "Eliminates competition",
    "Controls pricing",
    "Reduces advertising"
  ],
  correct: 0
},
{
  chapter: "Chapter 6",
  id: 21,
  category: "Reference Groups",
  question: "Primary membership groups include:",
  answers: [
    "Family friends and coworkers",
    "Celebrities only",
    "Government agencies",
    "Trade unions only"
  ],
  correct: 0
},
{
  chapter: "Chapter 6",
  id: 22,
  category: "Reference Groups",
  question: "Aspirational reference groups are groups:",
  answers: [
    "People avoid",
    "People would like to join",
    "Required by law",
    "Used only in business"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 23,
  category: "Opinion Leaders",
  question: "Opinion leaders influence consumers by:",
  answers: [
    "Providing trusted product information",
    "Manufacturing products",
    "Setting taxes",
    "Eliminating competition"
  ],
  correct: 0
},
{
  chapter: "Chapter 6",
  id: 24,
  category: "Self-Schema",
  question: "A consumer with a connected self-schema sees themselves as:",
  answers: [
    "Completely independent",
    "An integral part of a group",
    "Disconnected from society",
    "Uninterested in opinions"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 25,
  category: "Individual Influences",
  question: "Individual buying decisions are influenced by:",
  answers: [
    "Age gender personality and lifestyle",
    "Weather only",
    "Government policy only",
    "Factory production"
  ],
  correct: 0
},
{
  chapter: "Chapter 6",
  id: 26,
  category: "Lifestyle",
  question: "Lifestyle is identified by a person's:",
  answers: [
    "Activities interests and opinions",
    "Bank balance only",
    "Occupation only",
    "Education only"
  ],
  correct: 0
},
{
  chapter: "Chapter 6",
  id: 27,
  category: "Self-Concept",
  question: "Self-concept combines:",
  answers: [
    "Product quality and pricing",
    "Ideal self-image and real self-image",
    "Culture and income",
    "Promotion and advertising"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 28,
  category: "Psychological Influences",
  question: "Psychological influences help consumers:",
  answers: [
    "Interact with their world",
    "Reduce manufacturing costs",
    "Create trade barriers",
    "Manage factories"
  ],
  correct: 0
},
{
  chapter: "Chapter 6",
  id: 29,
  category: "Perception",
  question: "Marketers use perception to identify important:",
  answers: [
    "Factory workers",
    "Product attributes",
    "Tax laws",
    "Import quotas"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 30,
  category: "Motivation",
  question: "Maslow's hierarchy organizes human needs into:",
  answers: [
    "Two categories",
    "Five categories",
    "Ten categories",
    "Unlimited categories"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 31,
  category: "Maslow's Hierarchy",
  question: "Which need is at the base of Maslow's hierarchy?",
  answers: [
    "Esteem",
    "Self-actualization",
    "Physiological needs",
    "Social needs"
  ],
  correct: 2
},
{
  chapter: "Chapter 6",
  id: 32,
  category: "Learning",
  question: "Experiential learning occurs when:",
  answers: [
    "Behavior changes through experience",
    "Learning occurs only in classrooms",
    "Consumers ignore products",
    "No behavior changes"
  ],
  correct: 0
},
{
  chapter: "Chapter 6",
  id: 33,
  category: "Learning",
  question: "Conceptual learning is based on:",
  answers: [
    "Direct experience only",
    "Reasoning without direct experience",
    "Random guessing",
    "Habit only"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 34,
  category: "Stimulus Generalization",
  question: "Stimulus generalization occurs when:",
  answers: [
    "Consumers avoid similar products",
    "A response extends to similar stimuli",
    "Consumers reject advertising",
    "Products become unrelated"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 35,
  category: "Stimulus Discrimination",
  question: "Stimulus discrimination is the ability to:",
  answers: [
    "Differentiate among similar products",
    "Ignore product differences",
    "Avoid brands",
    "Reduce product quality"
  ],
  correct: 0
},
{
  chapter: "Chapter 6",
  id: 36,
  category: "Perceived Value",
  question: "Perceived value is:",
  answers: [
    "The consumer's evaluation of benefits versus costs",
    "The manufacturing cost",
    "The retail markup only",
    "The product warranty"
  ],
  correct: 0
},
{
  chapter: "Chapter 6",
  id: 37,
  category: "Utilitarian Value",
  question: "Utilitarian value focuses primarily on:",
  answers: [
    "Fun and pleasure",
    "Function and usefulness",
    "Luxury only",
    "Social media"
  ],
  correct: 1
},
{
  chapter: "Chapter 6",
  id: 38,
  category: "Hedonic Value",
  question: "Hedonic value is associated with:",
  answers: [
    "Emotional enjoyment and pleasure",
    "Product durability only",
    "Factory efficiency",
    "Price discounts"
  ],
  correct: 0
},
{
  chapter: "Chapter 6",
  id: 39,
  category: "Information Search",
  question: "An internal information search involves:",
  answers: [
    "Using personal memories and experiences",
    "Searching online only",
    "Reading advertisements only",
    "Asking competitors"
  ],
  correct: 0
},
{
  chapter: "Chapter 6",
  id: 40,
  category: "Information Search",
  question: "External information search includes:",
  answers: [
    "Recalling past experiences",
    "Seeking information from outside sources",
    "Ignoring advertisements",
    "Avoiding reviews"
  ],
  correct: 1
},
  {
  chapter: "Chapter 8",
  id: 1,
  category: "Market Segmentation",
  question: "A market consists of:",
  answers: [
    "Only businesses",
    "People or organizations with needs wants and ability to buy",
    "Only government agencies",
    "Only retailers"
  ],
  correct: 1
},
{
  chapter: "Chapter 8",
  id: 2,
  category: "Market Segment",
  question: "A market segment is:",
  answers: [
    "The entire economy",
    "A subgroup sharing similar product needs",
    "A company's competitors",
    "A government regulation"
  ],
  correct: 1
},
{
  chapter: "Chapter 8",
  id: 3,
  category: "Market Segmentation",
  question: "Market segmentation is the process of:",
  answers: [
    "Creating advertisements",
    "Dividing a market into meaningful similar groups",
    "Raising prices",
    "Eliminating competition"
  ],
  correct: 1
},
{
  chapter: "Chapter 8",
  id: 4,
  category: "Market",
  question: "For a market to exist consumers must:",
  answers: [
    "Have wants needs and willingness to buy",
    "Own a business",
    "Be wealthy",
    "Live in cities"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 5,
  category: "Segmentation Importance",
  question: "The purpose of market segmentation is to:",
  answers: [
    "Increase manufacturing costs",
    "Tailor marketing mixes to specific groups",
    "Reduce advertising",
    "Eliminate customer research"
  ],
  correct: 1
},
{
  chapter: "Chapter 8",
  id: 6,
  category: "Segmentation Importance",
  question: "Market segmentation helps marketers:",
  answers: [
    "Define customer needs more precisely",
    "Ignore competition",
    "Eliminate target markets",
    "Reduce product quality"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 7,
  category: "Segmentation Importance",
  question: "Segmentation helps decision makers allocate:",
  answers: [
    "Resources more accurately",
    "Taxes equally",
    "Ownership shares",
    "Production quotas"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 8,
  category: "Successful Segmentation",
  question: "Successful market segments must be:",
  answers: [
    "Substantial identifiable measurable and accessible",
    "Small and hidden",
    "Expensive only",
    "Unreachable"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 9,
  category: "Successful Segmentation",
  question: "Substantiality means a market segment should:",
  answers: [
    "Be large enough to justify targeting",
    "Be ignored",
    "Contain only businesses",
    "Have no competitors"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 10,
  category: "Successful Segmentation",
  question: "Accessibility refers to whether marketers can:",
  answers: [
    "Reach and serve the segment",
    "Control government policy",
    "Eliminate competitors",
    "Increase taxes"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 11,
  category: "Segmentation Bases",
  question: "Which is a common consumer segmentation base?",
  answers: [
    "Geography",
    "Demography",
    "Psychographics",
    "All of the above"
  ],
  correct: 3
},
{
  chapter: "Chapter 8",
  id: 12,
  category: "Geographic Segmentation",
  question: "Geographic segmentation divides markets based on:",
  answers: [
    "Location",
    "Income only",
    "Age only",
    "Lifestyle only"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 13,
  category: "Demographic Segmentation",
  question: "Demographic segmentation commonly uses:",
  answers: [
    "Age income and gender",
    "Weather conditions",
    "Store design",
    "Competitor actions"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 14,
  category: "Psychographic Segmentation",
  question: "Psychographic segmentation focuses on:",
  answers: [
    "Lifestyle interests and opinions",
    "Location only",
    "Business size",
    "Population density"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 15,
  category: "Benefit Segmentation",
  question: "Benefit segmentation groups consumers based on:",
  answers: [
    "Benefits they seek from products",
    "Their location",
    "Their employer",
    "Their age only"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 16,
  category: "Usage Rate",
  question: "Usage-rate segmentation classifies consumers by:",
  answers: [
    "How often they use a product",
    "Their education level",
    "Their political beliefs",
    "Their family size"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 17,
  category: "Business Markets",
  question: "Business market segmentation can be based on:",
  answers: [
    "Company size",
    "Geographic location",
    "Type of company",
    "All of the above"
  ],
  correct: 3
},
{
  chapter: "Chapter 8",
  id: 18,
  category: "Business Markets",
  question: "The four business market segments include:",
  answers: [
    "Producers resellers government and institutions",
    "Families students and tourists",
    "Children adults and seniors",
    "Importers exporters and retailers"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 19,
  category: "Business Markets",
  question: "Volume of purchase is commonly used for:",
  answers: [
    "Business segmentation",
    "Pricing laws",
    "Government taxes",
    "Retail design"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 20,
  category: "Segmentation Process",
  question: "The first step in segmenting a market is:",
  answers: [
    "Selecting a market or product category for study",
    "Creating advertisements",
    "Setting prices",
    "Designing packaging"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 21,
  category: "Segmentation Process",
  question: "After selecting segmentation bases marketers should:",
  answers: [
    "Select segmentation descriptors",
    "Ignore competitors",
    "Stop research",
    "Reduce production"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 22,
  category: "Target Marketing",
  question: "An undifferentiated targeting strategy:",
  answers: [
    "Uses one marketing mix for the entire market",
    "Targets one niche only",
    "Targets only businesses",
    "Uses different mixes for each segment"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 23,
  category: "Target Marketing",
  question: "A concentrated targeting strategy focuses on:",
  answers: [
    "One specific market segment",
    "Every possible customer",
    "Only government buyers",
    "Random consumers"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 24,
  category: "Target Marketing",
  question: "A concentrated targeting strategy is also called:",
  answers: [
    "Niche marketing",
    "Mass marketing",
    "Direct exporting",
    "Positioning"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 25,
  category: "Target Marketing",
  question: "A multisegment targeting strategy:",
  answers: [
    "Uses distinct marketing mixes for multiple segments",
    "Targets only one customer",
    "Eliminates segmentation",
    "Avoids customization"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 26,
  category: "CRM",
  question: "CRM stands for:",
  answers: [
    "Customer Relationship Management",
    "Consumer Retail Marketing",
    "Corporate Revenue Model",
    "Customer Response Measurement"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 27,
  category: "CRM",
  question: "Companies using CRM successfully tend to:",
  answers: [
    "Customize goods and services",
    "Ignore customer data",
    "Eliminate loyalty programs",
    "Reduce personalization"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 28,
  category: "CRM",
  question: "CRM allows marketers to target customers with:",
  answers: [
    "Extremely relevant offerings",
    "Random promotions",
    "No communication",
    "Only expensive products"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 29,
  category: "Positioning",
  question: "Positioning influences:",
  answers: [
    "Consumers' perceptions of a brand",
    "Government regulations",
    "Manufacturing costs",
    "Warehouse operations"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 30,
  category: "Perceptual Mapping",
  question: "Perceptual mapping is used to:",
  answers: [
    "Display product locations in consumers' minds",
    "Measure factory efficiency",
    "Calculate taxes",
    "Track employee attendance"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 31,
  category: "Repositioning",
  question: "Repositioning means:",
  answers: [
    "Changing consumers' perceptions of a brand",
    "Closing retail stores",
    "Reducing advertising",
    "Creating patents"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 32,
  category: "Product Differentiation",
  question: "Product differentiation is used to:",
  answers: [
    "Distinguish products from competitors",
    "Eliminate competition",
    "Reduce product quality",
    "Avoid segmentation"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 33,
  category: "Positioning",
  question: "Effective positioning requires marketers to:",
  answers: [
    "Assess competitors' positions",
    "Determine important dimensions",
    "Choose the best market position",
    "All of the above"
  ],
  correct: 3
},
{
  chapter: "Chapter 8",
  id: 34,
  category: "Positioning Bases",
  question: "Which is a positioning base?",
  answers: [
    "Price and quality",
    "Emotion",
    "Competitor",
    "All of the above"
  ],
  correct: 3
},
{
  chapter: "Chapter 8",
  id: 35,
  category: "80/20 Principle",
  question: "The 80/20 principle suggests that:",
  answers: [
    "A small percentage of customers account for most sales",
    "80 percent of products fail",
    "20 percent of firms dominate all industries",
    "Most customers buy once"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 36,
  category: "Family Life Cycle",
  question: "Family life cycle segmentation is part of:",
  answers: [
    "Demographic segmentation",
    "Geographic segmentation",
    "Benefit segmentation",
    "Usage segmentation"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 37,
  category: "Geodemographic Segmentation",
  question: "Geodemographic segmentation combines:",
  answers: [
    "Geographic and demographic data",
    "Psychographic and pricing data",
    "Behavioral and legal data",
    "Lifestyle and taxation"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 38,
  category: "Cannibalization",
  question: "Cannibalization occurs when:",
  answers: [
    "A company's new product reduces sales of its existing products",
    "A competitor leaves the market",
    "Prices increase rapidly",
    "Customers stop buying entirely"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 39,
  category: "Optimizers",
  question: "Optimizers are consumers who:",
  answers: [
    "Seek the very best possible choice",
    "Buy the first acceptable option",
    "Avoid shopping",
    "Ignore product comparisons"
  ],
  correct: 0
},
{
  chapter: "Chapter 8",
  id: 40,
  category: "Satisficers",
  question: "Satisficers are consumers who:",
  answers: [
    "Choose products that are good enough",
    "Always buy luxury products",
    "Seek endless alternatives",
    "Avoid decisions"
  ],
  correct: 0
},
  {
  chapter: "Chapter 9",
  id: 1,
  category: "Marketing Research",
  question: "Marketing research is the process of:",
  answers: [
    "Creating advertisements only",
    "Planning collecting and analyzing data relevant to marketing decisions",
    "Producing products",
    "Managing retail stores"
  ],
  correct: 1
},
{
  chapter: "Chapter 9",
  id: 2,
  category: "Marketing Research",
  question: "Marketing research links the marketer to:",
  answers: [
    "Only suppliers",
    "Consumers customers and the public through information",
    "Only competitors",
    "Only government agencies"
  ],
  correct: 1
},
{
  chapter: "Chapter 9",
  id: 3,
  category: "Marketing Research",
  question: "Descriptive research answers questions about:",
  answers: [
    "Historic sales trends and consumer attitudes",
    "Future stock prices only",
    "Factory production",
    "Shipping costs"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 4,
  category: "Marketing Research",
  question: "Diagnostic research focuses on:",
  answers: [
    "Predicting future events only",
    "Determining why something happened",
    "Manufacturing products",
    "Creating advertisements"
  ],
  correct: 1
},
{
  chapter: "Chapter 9",
  id: 5,
  category: "Marketing Research",
  question: "Predictive research attempts to answer:",
  answers: [
    "What if questions",
    "Who owns the company",
    "How factories operate",
    "How taxes are collected"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 6,
  category: "Research Process",
  question: "The marketing research process helps managers:",
  answers: [
    "Make informed marketing decisions",
    "Avoid customers",
    "Reduce all risks completely",
    "Eliminate competition"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 7,
  category: "Research Problems",
  question: "A marketing research problem determines:",
  answers: [
    "What information is needed and how to obtain it",
    "Employee salaries",
    "Factory locations",
    "Government regulations"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 8,
  category: "Research Objectives",
  question: "A marketing research objective defines:",
  answers: [
    "Specific information needed to solve a problem",
    "Company ownership",
    "Tax strategies",
    "Shipping schedules"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 9,
  category: "Management Decision Problem",
  question: "A management decision problem is:",
  answers: [
    "A broad problem requiring managerial action",
    "A type of survey question",
    "A legal document",
    "A sales report"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 10,
  category: "Big Data",
  question: "Big data refers to:",
  answers: [
    "Only financial records",
    "The rapid growth in the volume variety and velocity of information",
    "A single spreadsheet",
    "Paper surveys only"
  ],
  correct: 1
},
{
  chapter: "Chapter 9",
  id: 11,
  category: "Big Data",
  question: "Big data analytics focuses on:",
  answers: [
    "Gathering data and adapting based on findings",
    "Reducing customer information",
    "Ignoring online activity",
    "Eliminating databases"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 12,
  category: "Research Design",
  question: "Research design specifies:",
  answers: [
    "Research questions and methods for gathering data",
    "Factory blueprints",
    "Company salaries",
    "Tax structures"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 13,
  category: "Survey Questions",
  question: "Open-ended questions:",
  answers: [
    "Allow respondents to answer in their own words",
    "Provide only yes or no responses",
    "Use rating scales only",
    "Limit all responses"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 14,
  category: "Survey Questions",
  question: "Closed-ended questions:",
  answers: [
    "Require written essays",
    "Ask respondents to choose from limited responses",
    "Avoid answer choices",
    "Measure emotions only"
  ],
  correct: 1
},
{
  chapter: "Chapter 9",
  id: 15,
  category: "Survey Questions",
  question: "Scaled-response questions are designed to:",
  answers: [
    "Measure the intensity of responses",
    "Reduce participation",
    "Eliminate opinions",
    "Gather shipping data"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 16,
  category: "Observation Research",
  question: "Observation research is the systematic process of:",
  answers: [
    "Recording behavioral patterns without questioning subjects",
    "Conducting only phone interviews",
    "Eliminating fieldwork",
    "Creating advertisements"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 17,
  category: "Ethnographic Research",
  question: "Ethnographic research involves:",
  answers: [
    "Direct observation of behavior and settings",
    "Only online surveys",
    "Laboratory experiments only",
    "Telephone marketing"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 18,
  category: "Experiments",
  question: "Experiments gather primary data by:",
  answers: [
    "Altering variables and observing effects",
    "Avoiding changes",
    "Reducing sample sizes",
    "Ignoring outcomes"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 19,
  category: "Sampling",
  question: "A sample is:",
  answers: [
    "A subset of the larger population",
    "The entire population",
    "Only loyal customers",
    "A competitor list"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 20,
  category: "Probability Sampling",
  question: "In a probability sample:",
  answers: [
    "Every population element has a known chance of selection",
    "No one can be selected",
    "Only employees are selected",
    "Selection is completely random without structure"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 21,
  category: "Nonprobability Sampling",
  question: "A nonprobability sample:",
  answers: [
    "Does not attempt to create a representative cross-section",
    "Always represents the population perfectly",
    "Uses equal selection chances",
    "Requires every consumer to participate"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 22,
  category: "Research Errors",
  question: "Measurement error occurs when:",
  answers: [
    "Provided information differs from desired information",
    "Samples are too large",
    "Customers refuse surveys",
    "Prices increase"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 23,
  category: "Research Errors",
  question: "Sampling error occurs when:",
  answers: [
    "The sample does not represent the target population",
    "The survey is online",
    "The data are visualized",
    "The sample is expensive"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 24,
  category: "Research Errors",
  question: "Frame error occurs when:",
  answers: [
    "The sample differs from the target population",
    "Consumers skip questions",
    "Advertising fails",
    "Researchers change prices"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 25,
  category: "Research Errors",
  question: "Random error occurs because:",
  answers: [
    "Samples are imperfect representations of populations",
    "Managers ignore reports",
    "Data are deleted",
    "Products are recalled"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 26,
  category: "Data Analysis",
  question: "The purpose of data analysis is to:",
  answers: [
    "Interpret and draw conclusions from collected data",
    "Increase manufacturing costs",
    "Reduce inventory",
    "Avoid reporting"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 27,
  category: "Data Analysis",
  question: "Cross-tabulation helps analysts:",
  answers: [
    "Identify relationships between responses",
    "Design product packaging",
    "Create tax reports",
    "Reduce production"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 28,
  category: "Reports",
  question: "Marketing research reports should include:",
  answers: [
    "Research objectives findings and recommendations",
    "Only advertisements",
    "Tax records only",
    "Employee contracts"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 29,
  category: "Internet Surveys",
  question: "One major advantage of Internet surveys is:",
  answers: [
    "Rapid development and reduced costs",
    "Higher shipping costs",
    "Reduced participation",
    "Longer response times"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 30,
  category: "Internet Surveys",
  question: "Online panel providers:",
  answers: [
    "Recruit participants who agree to complete surveys",
    "Manufacture products",
    "Manage taxes",
    "Create competitors"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 31,
  category: "Web Communities",
  question: "Web communities consist of:",
  answers: [
    "Consumers participating in ongoing dialogue with companies",
    "Government regulators",
    "Factory workers",
    "Competitor databases"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 32,
  category: "Mobile Research",
  question: "Mobile research has become more important because:",
  answers: [
    "Apps make surveys easier and more intuitive",
    "Mobile devices are disappearing",
    "Desktop computers are increasing",
    "Consumers avoid smartphones"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 33,
  category: "Scanner-Based Research",
  question: "Scanner-based research gathers information from:",
  answers: [
    "A single group of respondents using scanner data",
    "Only government records",
    "Paper forms only",
    "Random advertisements"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 34,
  category: "InfoScan",
  question: "InfoScan is used to:",
  answers: [
    "Collect weekly retail sales data",
    "Monitor factory equipment",
    "Track employee attendance",
    "Create advertisements"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 35,
  category: "Marketing Research Decisions",
  question: "Marketing research should be conducted when:",
  answers: [
    "The value of information exceeds research costs",
    "Managers are bored",
    "Competitors disappear",
    "Products fail automatically"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 36,
  category: "CRM",
  question: "CRM is described as:",
  answers: [
    "A closed-loop system building customer relationships",
    "A tax collection system",
    "A production process",
    "A manufacturing strategy"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 37,
  category: "CRM",
  question: "Technology in CRM systems is used to:",
  answers: [
    "Store and integrate customer data",
    "Reduce communication",
    "Eliminate databases",
    "Increase tariffs"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 38,
  category: "Competitive Intelligence",
  question: "Competitive intelligence helps managers:",
  answers: [
    "Assess competitors and vendors",
    "Avoid customers",
    "Reduce marketing efforts",
    "Ignore industry trends"
  ],
  correct: 0
},
{
  chapter: "Chapter 9",
  id: 39,
  category: "Competitive Intelligence",
  question: "Which is a source of competitive intelligence?",
  answers: [
    "Trade shows",
    "Suppliers",
    "Government agencies",
    "All of the above"
  ],
  correct: 3
},
{
  chapter: "Chapter 9",
  id: 40,
  category: "Marketing Research",
  question: "Marketing research is important because it:",
  answers: [
    "Supports marketing decision making",
    "Eliminates competition",
    "Guarantees profits",
    "Removes customer needs"
  ],
  correct: 0
},
    {
  chapter: "Chapter 15",
  id: 1,
  category: "Promotion",
  question: "The main role of promotion in the marketing mix is to:",
  answers: [
    "Reduce manufacturing costs",
    "Convince target customers the product offers a competitive advantage",
    "Eliminate competition",
    "Control government policy"
  ],
  correct: 1
},
{
  chapter: "Chapter 15",
  id: 2,
  category: "Promotion",
  question: "Promotion is best described as:",
  answers: [
    "Communication by marketers to inform persuade and remind buyers",
    "Manufacturing products",
    "Pricing products only",
    "Managing employees"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 3,
  category: "Communication",
  question: "Communication is the process by which:",
  answers: [
    "Goods are distributed",
    "Meanings are exchanged through symbols",
    "Prices are established",
    "Products are manufactured"
  ],
  correct: 1
},
{
  chapter: "Chapter 15",
  id: 4,
  category: "Interpersonal Communication",
  question: "Interpersonal communication involves:",
  answers: [
    "Face-to-face communication between people",
    "Television advertising only",
    "Mass media campaigns",
    "Online surveys"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 5,
  category: "Mass Communication",
  question: "Mass communication delivers messages through:",
  answers: [
    "A mass medium to large audiences",
    "Only direct selling",
    "Private meetings",
    "Internal company emails"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 6,
  category: "Communication Process",
  question: "The sender in the communication process is the:",
  answers: [
    "Person receiving the message",
    "Originator of the message",
    "Advertising agency",
    "Retail customer"
  ],
  correct: 1
},
{
  chapter: "Chapter 15",
  id: 7,
  category: "Communication Process",
  question: "Encoding refers to:",
  answers: [
    "Interpreting a message",
    "Converting ideas into words or symbols",
    "Ignoring communication",
    "Measuring sales"
  ],
  correct: 1
},
{
  chapter: "Chapter 15",
  id: 8,
  category: "Communication Process",
  question: "A channel is:",
  answers: [
    "The medium used to transmit a message",
    "A retail store",
    "A type of survey",
    "A pricing strategy"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 9,
  category: "Communication Process",
  question: "Noise in communication is:",
  answers: [
    "Music in advertisements",
    "Anything that interferes with message transmission",
    "Consumer feedback",
    "Positive publicity"
  ],
  correct: 1
},
{
  chapter: "Chapter 15",
  id: 10,
  category: "Communication Process",
  question: "Decoding means:",
  answers: [
    "Sending a message",
    "Interpreting symbols and language",
    "Reducing advertising",
    "Increasing sales"
  ],
  correct: 1
},
{
  chapter: "Chapter 15",
  id: 11,
  category: "Communication Process",
  question: "Feedback is:",
  answers: [
    "The receiver's response to a message",
    "A pricing method",
    "A sales quota",
    "A distribution channel"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 12,
  category: "Social Media",
  question: "Social media changed communication because consumers can now:",
  answers: [
    "Become senders of messages",
    "Eliminate brands",
    "Avoid communication",
    "Control production"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 13,
  category: "Promotion Tasks",
  question: "Informative promotion is used to:",
  answers: [
    "Keep brands in consumers' minds",
    "Stimulate interest in new products",
    "Create loyalty programs",
    "Reduce product awareness"
  ],
  correct: 1
},
{
  chapter: "Chapter 15",
  id: 14,
  category: "Promotion Tasks",
  question: "Persuasive promotion aims to:",
  answers: [
    "Stimulate purchases or actions",
    "Reduce advertising",
    "Eliminate competitors",
    "Lower prices"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 15,
  category: "Promotion Tasks",
  question: "Reminder promotion is designed to:",
  answers: [
    "Keep the product in the public's mind",
    "Introduce new products",
    "Reduce inventory",
    "Create surveys"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 16,
  category: "Promotion Tasks",
  question: "Connect promotion forms relationships with customers through:",
  answers: [
    "Social media",
    "Manufacturing",
    "Shipping",
    "Accounting"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 17,
  category: "Product Life Cycle",
  question: "Informative promotion is most common during the:",
  answers: [
    "Introduction stage",
    "Growth stage",
    "Maturity stage",
    "Decline stage"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 18,
  category: "Product Life Cycle",
  question: "Persuasive promotion becomes important during the:",
  answers: [
    "Growth stage",
    "Decline stage",
    "Introduction stage",
    "Testing stage"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 19,
  category: "Product Life Cycle",
  question: "Reminder promotion is most effective during the:",
  answers: [
    "Maturity stage",
    "Introduction stage",
    "Testing stage",
    "Launch stage"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 20,
  category: "Promotional Mix",
  question: "The promotional mix is the:",
  answers: [
    "Combination of promotional tools used to reach target markets",
    "Manufacturing process",
    "Pricing strategy",
    "Distribution system"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 21,
  category: "Promotional Mix",
  question: "Which is an element of the promotional mix?",
  answers: [
    "Advertising",
    "Public relations",
    "Sales promotion",
    "All of the above"
  ],
  correct: 3
},
{
  chapter: "Chapter 15",
  id: 22,
  category: "Advertising",
  question: "Advertising is:",
  answers: [
    "Paid impersonal mass communication",
    "Direct employee management",
    "Government regulation",
    "Product manufacturing"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 23,
  category: "Public Relations",
  question: "Public relations helps firms:",
  answers: [
    "Maintain a positive image",
    "Reduce customer service",
    "Increase taxes",
    "Eliminate competitors"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 24,
  category: "Sales Promotion",
  question: "Sales promotion is used to:",
  answers: [
    "Stimulate immediate increases in demand",
    "Replace all advertising",
    "Reduce communication",
    "Avoid customer interaction"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 25,
  category: "Personal Selling",
  question: "Personal selling involves:",
  answers: [
    "Paid personal communication between two people",
    "Mass communication only",
    "Online automation only",
    "Public relations campaigns"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 26,
  category: "Social Media",
  question: "Social media are used primarily to:",
  answers: [
    "Facilitate online conversations and interactions",
    "Reduce engagement",
    "Increase production costs",
    "Eliminate advertising"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 27,
  category: "AIDA",
  question: "AIDA stands for:",
  answers: [
    "Attention interest desire and action",
    "Awareness interaction design and analysis",
    "Action influence demand and awareness",
    "Attention information distribution and action"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 28,
  category: "AIDA",
  question: "The AIDA concept outlines:",
  answers: [
    "Stages of consumer involvement with promotional messages",
    "Financial planning methods",
    "Pricing strategies",
    "Retail management systems"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 29,
  category: "IMC",
  question: "Integrated Marketing Communications (IMC) means:",
  answers: [
    "Careful coordination of all promotional messages",
    "Reducing social media use",
    "Eliminating advertising",
    "Using one communication channel only"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 30,
  category: "IMC",
  question: "The purpose of IMC is to:",
  answers: [
    "Ensure message consistency across contact points",
    "Increase confusion",
    "Reduce customer relationships",
    "Avoid coordination"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 31,
  category: "IMC",
  question: "One reason for the growth of IMC is:",
  answers: [
    "Fragmentation of the mass market",
    "Reduced media choices",
    "Elimination of social media",
    "Decreased advertising"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 32,
  category: "Promotional Mix Factors",
  question: "Which factor affects the choice of promotional mix?",
  answers: [
    "Nature of the product",
    "Target market characteristics",
    "Funds available",
    "All of the above"
  ],
  correct: 3
},
{
  chapter: "Chapter 15",
  id: 33,
  category: "Product Life Cycle",
  question: "During the introduction stage promotion focuses mainly on:",
  answers: [
    "Informing customers of product availability",
    "Reducing advertising",
    "Eliminating competition",
    "Maintaining loyalty only"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 34,
  category: "Product Life Cycle",
  question: "During the maturity stage marketers emphasize:",
  answers: [
    "Persuasive and reminder advertising",
    "No promotion",
    "Only public relations",
    "Only product testing"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 35,
  category: "Product Life Cycle",
  question: "During the decline stage:",
  answers: [
    "Most promotion is reduced",
    "Promotion spending increases dramatically",
    "Advertising becomes the only tool",
    "New product launches increase"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 36,
  category: "Buying Decisions",
  question: "Routine buying decisions are commonly promoted with:",
  answers: [
    "Advertising and sales promotion",
    "Personal selling only",
    "Trade shows only",
    "Public relations only"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 37,
  category: "Buying Decisions",
  question: "Complex buying decisions often rely on:",
  answers: [
    "Personal selling and print advertising",
    "Coupons only",
    "Reminder advertising only",
    "Social games"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 38,
  category: "Push Strategy",
  question: "A push strategy uses:",
  answers: [
    "Aggressive personal selling to move products through channels",
    "Only consumer advertising",
    "No wholesalers",
    "Direct manufacturing only"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 39,
  category: "Pull Strategy",
  question: "A pull strategy focuses promotional efforts on:",
  answers: [
    "End consumers and opinion leaders",
    "Factory workers",
    "Government agencies",
    "Retail accounting"
  ],
  correct: 0
},
{
  chapter: "Chapter 15",
  id: 40,
  category: "Push vs Pull",
  question: "Consumer demand in a pull strategy:",
  answers: [
    "Pulls the product through the distribution channel",
    "Reduces sales",
    "Eliminates retailers",
    "Stops production"
  ],
  correct: 0
},
  {
  chapter: "1st Exam",
  id: 1,
  category: "Marketing Basics",
  question: "Marketing is best defined as:",
  answers: [
    "Selling products only",
    "Creating communicating delivering and exchanging value",
    "Advertising products",
    "Managing warehouses"
  ],
  correct: 1
},
{
  chapter: "1st Exam",
  id: 2,
  category: "Marketing Basics",
  question: "The goal of marketing is to:",
  answers: [
    "Eliminate competition",
    "Satisfy customer needs and wants",
    "Reduce customer interaction",
    "Increase production only"
  ],
  correct: 1
},
{
  chapter: "1st Exam",
  id: 3,
  category: "Marketing Mix",
  question: "The marketing mix consists of:",
  answers: [
    "Product price promotion and distribution",
    "People profits and planning",
    "Production pricing and packaging",
    "Promotion only"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 4,
  category: "Marketing Mix",
  question: "The marketing mix is important because it:",
  answers: [
    "Guides marketing strategy decisions",
    "Eliminates customer research",
    "Reduces customer value",
    "Avoids segmentation"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 5,
  category: "Marketing Mix",
  question: "Which marketing mix element communicates value to customers?",
  answers: [
    "Promotion",
    "Distribution",
    "Production",
    "Accounting"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 6,
  category: "Marketing Mix",
  question: "Which marketing mix element creates the actual offering?",
  answers: [
    "Product",
    "Promotion",
    "Price",
    "Place"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 7,
  category: "Marketing Mix",
  question: "Which marketing mix element determines what customers pay?",
  answers: [
    "Promotion",
    "Price",
    "Product",
    "Distribution"
  ],
  correct: 1
},
{
  chapter: "1st Exam",
  id: 8,
  category: "Marketing Mix",
  question: "Distribution in the marketing mix refers to:",
  answers: [
    "Advertising methods",
    "How products reach customers",
    "Pricing decisions",
    "Manufacturing processes"
  ],
  correct: 1
},
{
  chapter: "1st Exam",
  id: 9,
  category: "Promotion",
  question: "Which is an element of the promotional mix?",
  answers: [
    "Advertising",
    "Public relations",
    "Sales promotion",
    "All of the above"
  ],
  correct: 3
},
{
  chapter: "1st Exam",
  id: 10,
  category: "Promotion",
  question: "Personal selling involves:",
  answers: [
    "Mass communication only",
    "Paid personal communication between two people",
    "Government advertising",
    "Automated production"
  ],
  correct: 1
},
{
  chapter: "1st Exam",
  id: 11,
  category: "Promotion",
  question: "Public relations primarily focuses on:",
  answers: [
    "Maintaining a positive company image",
    "Reducing inventory",
    "Lowering taxes",
    "Creating products"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 12,
  category: "Promotion",
  question: "Sales promotion is designed to:",
  answers: [
    "Stimulate immediate demand",
    "Replace advertising permanently",
    "Increase manufacturing",
    "Reduce competition"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 13,
  category: "BCG Matrix",
  question: "The BCG Matrix helps marketers:",
  answers: [
    "Make investment decisions",
    "Design products only",
    "Reduce segmentation",
    "Control governments"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 14,
  category: "BCG Matrix",
  question: "Stars in the BCG Matrix represent:",
  answers: [
    "High market growth and high market share",
    "Low growth and low market share",
    "High growth and low market share",
    "Low growth and high market share"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 15,
  category: "BCG Matrix",
  question: "Cash cows are products with:",
  answers: [
    "High market share and low market growth",
    "Low market share and low growth",
    "High growth and low market share",
    "No market share"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 16,
  category: "BCG Matrix",
  question: "Question marks in the BCG Matrix have:",
  answers: [
    "High growth but low market share",
    "Low growth and high share",
    "High profits and low risk",
    "No competition"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 17,
  category: "BCG Matrix",
  question: "Dogs in the BCG Matrix are characterized by:",
  answers: [
    "Low growth and low market share",
    "High growth and high market share",
    "High profits only",
    "Strong customer loyalty"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 18,
  category: "Ansoff Matrix",
  question: "The Ansoff Strategic Opportunity Matrix helps firms:",
  answers: [
    "Identify growth opportunities",
    "Reduce production",
    "Create taxes",
    "Eliminate competitors"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 19,
  category: "Ansoff Matrix",
  question: "Market penetration involves:",
  answers: [
    "Selling existing products in existing markets",
    "Selling new products in new markets",
    "Selling existing products in new markets",
    "Reducing promotion"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 20,
  category: "Ansoff Matrix",
  question: "Market development means:",
  answers: [
    "Selling existing products to new markets",
    "Creating new products for current markets",
    "Reducing market share",
    "Eliminating advertising"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 21,
  category: "Ansoff Matrix",
  question: "Product development focuses on:",
  answers: [
    "New products for existing markets",
    "Existing products for new markets",
    "Reducing production",
    "Selling old products only"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 22,
  category: "Ansoff Matrix",
  question: "Diversification involves:",
  answers: [
    "New products in new markets",
    "Existing products in current markets",
    "Reducing market risk",
    "Improving distribution only"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 23,
  category: "Marketing Plan",
  question: "A marketing plan outlines:",
  answers: [
    "Marketing objectives and strategies",
    "Only pricing",
    "Only manufacturing",
    "Employee payroll"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 24,
  category: "Marketing Plan",
  question: "Situation analysis in a marketing plan examines:",
  answers: [
    "Internal and external environments",
    "Only customer complaints",
    "Only finances",
    "Only promotions"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 25,
  category: "Marketing Environment",
  question: "The external marketing environment includes:",
  answers: [
    "Economic forces",
    "Competitive forces",
    "Social forces",
    "All of the above"
  ],
  correct: 3
},
{
  chapter: "1st Exam",
  id: 26,
  category: "Marketing Environment",
  question: "Competitive forces in the environment include:",
  answers: [
    "Rival firms and substitute products",
    "Weather only",
    "Employee salaries",
    "Production schedules"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 27,
  category: "Marketing Environment",
  question: "Social factors affecting marketing include:",
  answers: [
    "Demographics and cultural trends",
    "Factory equipment",
    "Shipping costs only",
    "Warehouse design"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 28,
  category: "Consumer Decision Process",
  question: "The first stage of consumer decision making is:",
  answers: [
    "Need recognition",
    "Purchase decision",
    "Postpurchase evaluation",
    "Alternative evaluation"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 29,
  category: "Consumer Decision Process",
  question: "After recognizing a need consumers typically:",
  answers: [
    "Search for information",
    "Ignore the need",
    "Create advertisements",
    "Stop evaluating products"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 30,
  category: "Consumer Decision Process",
  question: "Internal information search relies on:",
  answers: [
    "Past experiences and memories",
    "Government databases",
    "Competitor reports",
    "Factory data"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 31,
  category: "Consumer Decision Process",
  question: "External information search involves:",
  answers: [
    "Seeking information from outside sources",
    "Recalling memories only",
    "Ignoring advertisements",
    "Reducing alternatives"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 32,
  category: "Consumer Decision Process",
  question: "An evoked set is:",
  answers: [
    "A group of brands consumers consider buying",
    "A promotional campaign",
    "A distribution channel",
    "A product category"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 33,
  category: "Consumer Decision Process",
  question: "Postpurchase evaluation determines:",
  answers: [
    "Customer satisfaction after purchase",
    "Manufacturing efficiency",
    "Advertising costs",
    "Competitor market share"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 34,
  category: "Consumer Decision Process",
  question: "Cognitive dissonance is:",
  answers: [
    "Inner tension after a purchase decision",
    "A type of advertising",
    "A pricing method",
    "A distribution strategy"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 35,
  category: "Consumer Decision Process",
  question: "Marketers reduce cognitive dissonance through:",
  answers: [
    "Effective communication with buyers",
    "Eliminating customer service",
    "Reducing quality",
    "Increasing confusion"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 36,
  category: "Consumer Buying Decisions",
  question: "Routine response behavior involves:",
  answers: [
    "Low-cost frequently purchased products",
    "Expensive unfamiliar products",
    "Luxury products only",
    "Rare business purchases"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 37,
  category: "Consumer Buying Decisions",
  question: "Extensive decision making is associated with:",
  answers: [
    "Expensive unfamiliar purchases",
    "Candy purchases",
    "Routine grocery shopping",
    "Habitual purchases"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 38,
  category: "Consumer Involvement",
  question: "Consumer involvement increases when:",
  answers: [
    "Perceived risk increases",
    "Products are routine",
    "Consumers are uninterested",
    "Products have low visibility"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 39,
  category: "Marketing Strategy",
  question: "Marketers intervene in the decision process by:",
  answers: [
    "Providing information and reducing uncertainty",
    "Ignoring customer needs",
    "Reducing product quality",
    "Avoiding promotion"
  ],
  correct: 0
},
{
  chapter: "1st Exam",
  id: 40,
  category: "Marketing Strategy",
  question: "The overall purpose of marketing strategy is to:",
  answers: [
    "Create customer value while meeting organizational goals",
    "Eliminate competition entirely",
    "Increase production only",
    "Reduce customer interaction"
  ],
  correct: 0
},
  {
  chapter: "Final Exam",
  id: 1,
  category: "Segmentation",
  question: "Market segmentation is the process of:",
  answers: [
    "Reducing product prices",
    "Dividing a market into meaningful similar groups",
    "Creating advertisements only",
    "Managing retail stores"
  ],
  correct: 1
},
{
  chapter: "Final Exam",
  id: 2,
  category: "Segmentation",
  question: "A successful market segment should be:",
  answers: [
    "Substantial measurable accessible and responsive",
    "Small and hidden",
    "Impossible to identify",
    "Unreachable"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 3,
  category: "Segmentation",
  question: "Geographic segmentation divides consumers based on:",
  answers: [
    "Location",
    "Income only",
    "Personality only",
    "Brand loyalty only"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 4,
  category: "Segmentation",
  question: "Demographic segmentation commonly uses:",
  answers: [
    "Age income and gender",
    "Store layouts",
    "Weather patterns",
    "Government laws"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 5,
  category: "Segmentation",
  question: "Psychographic segmentation focuses on:",
  answers: [
    "Lifestyle interests and opinions",
    "Location only",
    "Population density",
    "Company size"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 6,
  category: "Segmentation",
  question: "Benefit segmentation groups consumers according to:",
  answers: [
    "Benefits sought from products",
    "Family size only",
    "Income only",
    "Store preference only"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 7,
  category: "Targeting",
  question: "Targeting refers to:",
  answers: [
    "Selecting market segments to serve",
    "Reducing advertising",
    "Manufacturing products",
    "Setting taxes"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 8,
  category: "Targeting",
  question: "An undifferentiated targeting strategy uses:",
  answers: [
    "One marketing mix for the entire market",
    "A different mix for each customer",
    "No promotion",
    "Only social media"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 9,
  category: "Targeting",
  question: "A concentrated targeting strategy focuses on:",
  answers: [
    "One specific market segment",
    "All consumers equally",
    "Government buyers only",
    "Every available market"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 10,
  category: "Targeting",
  question: "A multisegment targeting strategy:",
  answers: [
    "Uses separate marketing mixes for multiple segments",
    "Targets only one customer",
    "Eliminates segmentation",
    "Avoids customization"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 11,
  category: "Positioning",
  question: "Positioning refers to:",
  answers: [
    "How consumers perceive a brand relative to competitors",
    "Warehouse placement",
    "Factory organization",
    "Pricing formulas"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 12,
  category: "Positioning",
  question: "Perceptual maps are used to:",
  answers: [
    "Display product positions in consumers' minds",
    "Track employee locations",
    "Design packaging",
    "Manage inventory"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 13,
  category: "Positioning",
  question: "Product differentiation helps firms:",
  answers: [
    "Distinguish products from competitors",
    "Reduce quality",
    "Avoid branding",
    "Eliminate customers"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 14,
  category: "Global Marketing",
  question: "Exporting is:",
  answers: [
    "Selling products to foreign markets",
    "Buying foreign products",
    "Avoiding trade",
    "Closing domestic operations"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 15,
  category: "Global Marketing",
  question: "Licensing allows foreign firms to:",
  answers: [
    "Use another firm's technology or brand legally",
    "Avoid agreements",
    "Eliminate exports",
    "Control governments"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 16,
  category: "Global Marketing",
  question: "A joint venture is:",
  answers: [
    "A partnership between firms",
    "A pricing strategy",
    "A tax agreement",
    "A retail campaign"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 17,
  category: "Global Marketing",
  question: "Direct foreign investment involves:",
  answers: [
    "Investing directly in foreign operations",
    "Avoiding international markets",
    "Reducing production",
    "Importing products only"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 18,
  category: "Global Marketing",
  question: "Contract manufacturing means:",
  answers: [
    "Hiring foreign firms to produce products",
    "Reducing labor",
    "Selling franchises only",
    "Eliminating exports"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 19,
  category: "Global Marketing",
  question: "Which market entry method generally has the lowest risk?",
  answers: [
    "Exporting",
    "Direct foreign investment",
    "Joint venture",
    "Contract manufacturing"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 20,
  category: "Global Marketing",
  question: "Which market entry method generally has the highest risk?",
  answers: [
    "Direct foreign investment",
    "Exporting",
    "Licensing",
    "Export brokerage"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 21,
  category: "Marketing Research",
  question: "Primary data are:",
  answers: [
    "Data collected specifically for a research project",
    "Previously published information",
    "Government tax records",
    "Historical archives only"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 22,
  category: "Marketing Research",
  question: "Secondary data are:",
  answers: [
    "Previously collected data used for a new purpose",
    "Data gathered firsthand",
    "Experimental results only",
    "Survey responses only"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 23,
  category: "Marketing Research",
  question: "An advantage of secondary data is that they are often:",
  answers: [
    "Less expensive and faster to obtain",
    "Always perfectly accurate",
    "More confidential",
    "Impossible to access"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 24,
  category: "Marketing Research",
  question: "Quantitative research focuses on:",
  answers: [
    "Numerical data and statistical analysis",
    "Open discussions only",
    "Feelings without measurement",
    "Personal stories only"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 25,
  category: "Marketing Research",
  question: "Qualitative research focuses on:",
  answers: [
    "In-depth understanding of attitudes and behaviors",
    "Large-scale numerical calculations",
    "Only sales reports",
    "Financial statements"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 26,
  category: "Nonprofit Marketing",
  question: "Nonprofit organizations primarily exist to:",
  answers: [
    "Achieve a mission rather than earn profits",
    "Maximize shareholder wealth",
    "Eliminate competition",
    "Reduce taxes"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 27,
  category: "Nonprofit Marketing",
  question: "A unique challenge for nonprofit marketers is:",
  answers: [
    "Balancing mission goals with limited resources",
    "Eliminating volunteers",
    "Avoiding public relations",
    "Reducing awareness"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 28,
  category: "Promotion",
  question: "The role of promotion in the marketing mix is to:",
  answers: [
    "Inform persuade and remind consumers",
    "Manufacture products",
    "Set accounting standards",
    "Reduce customer interaction"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 29,
  category: "Communication Process",
  question: "Encoding is:",
  answers: [
    "Converting ideas into words or symbols",
    "Receiving a message",
    "Reducing noise",
    "Measuring sales"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 30,
  category: "Communication Process",
  question: "Noise in communication refers to:",
  answers: [
    "Anything that interferes with message transmission",
    "Positive feedback",
    "A communication channel",
    "A pricing strategy"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 31,
  category: "Communication Process",
  question: "Feedback is:",
  answers: [
    "The receiver's response to a message",
    "The original advertisement",
    "The pricing structure",
    "A type of distribution"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 32,
  category: "Promotion Goals",
  question: "Informative promotion is most commonly used during the:",
  answers: [
    "Introduction stage of the product life cycle",
    "Decline stage",
    "Maturity stage",
    "Saturation stage"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 33,
  category: "Promotion Goals",
  question: "Persuasive promotion aims to:",
  answers: [
    "Stimulate purchases and build preference",
    "Reduce awareness",
    "Eliminate demand",
    "Avoid communication"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 34,
  category: "Promotion Goals",
  question: "Reminder promotion is mainly used to:",
  answers: [
    "Keep products in consumers' minds",
    "Launch entirely new categories",
    "Reduce customer loyalty",
    "Avoid advertising"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 35,
  category: "Promotional Mix",
  question: "Which is part of the promotional mix?",
  answers: [
    "Advertising",
    "Public relations",
    "Sales promotion",
    "All of the above"
  ],
  correct: 3
},
{
  chapter: "Final Exam",
  id: 36,
  category: "Promotional Mix",
  question: "Advertising is considered:",
  answers: [
    "Paid impersonal communication",
    "Direct face-to-face selling only",
    "A manufacturing process",
    "A distribution method"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 37,
  category: "Promotional Mix",
  question: "Personal selling involves:",
  answers: [
    "Direct paid communication between buyer and seller",
    "Mass communication only",
    "Automated advertising",
    "Online surveys"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 38,
  category: "Promotional Mix",
  question: "Sales promotion is designed to:",
  answers: [
    "Stimulate immediate consumer action",
    "Replace all advertising",
    "Reduce customer interest",
    "Eliminate public relations"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 39,
  category: "Promotion",
  question: "Integrated Marketing Communications (IMC) ensures:",
  answers: [
    "Consistent promotional messages across channels",
    "Reduced communication",
    "No social media use",
    "Only television advertising"
  ],
  correct: 0
},
{
  chapter: "Final Exam",
  id: 40,
  category: "Promotion",
  question: "A pull strategy focuses promotional efforts on:",
  answers: [
    "End consumers to create demand",
    "Wholesalers only",
    "Retail accounting",
    "Internal employees"
  ],
  correct: 0
},
  
];
