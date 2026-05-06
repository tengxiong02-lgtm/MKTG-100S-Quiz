const questions = [
  {
  id: 1,
  category: "Marketing Basics",
  question: "What is marketing primarily focused on?",
  answers: [
    "Reducing employee turnover",
    "Creating value for customers",
    "Managing accounting records",
    "Lowering taxes"
  ],
  correct: 1
},

{
  id: 2,
  category: "Marketing Basics",
  question: "Which activity is part of marketing?",
  answers: [
    "Delivering customer value",
    "Auditing financial statements",
    "Writing legal contracts",
    "Managing payroll"
  ],
  correct: 1
},

{
  id: 3,
  category: "Marketing Mix",
  question: "Which of the following is part of the 4 Ps?",
  answers: [
    "Planning",
    "Promotion",
    "People",
    "Process"
  ],
  correct: 1
},

{
  id: 4,
  category: "Marketing Mix",
  question: "Price refers to what in marketing?",
  answers: [
    "The target audience",
    "The amount customers pay",
    "The advertising strategy",
    "The product packaging"
  ],
  correct: 1
},

{
  id: 5,
  category: "Marketing Mix",
  question: "Place in the marketing mix refers to:",
  answers: [
    "Store decoration",
    "Distribution channels",
    "Product colors",
    "Employee uniforms"
  ],
  correct: 1
},

{
  id: 6,
  category: "Consumer Behavior",
  question: "What is the first stage of consumer decision making?",
  answers: [
    "Purchase",
    "Need recognition",
    "Post-purchase evaluation",
    "Alternative evaluation"
  ],
  correct: 1
},

{
  id: 7,
  category: "Consumer Behavior",
  question: "Post-purchase behavior occurs:",
  answers: [
    "Before a purchase",
    "After the customer buys a product",
    "During advertising",
    "Before need recognition"
  ],
  correct: 1
},

{
  id: 8,
  category: "Segmentation",
  question: "Market segmentation means:",
  answers: [
    "Increasing product prices",
    "Dividing markets into smaller groups",
    "Hiring more employees",
    "Reducing promotions"
  ],
  correct: 1
},

{
  id: 9,
  category: "Segmentation",
  question: "Demographic segmentation includes:",
  answers: [
    "Weather patterns",
    "Age and income",
    "Store location",
    "Product packaging"
  ],
  correct: 1
},

{
  id: 10,
  category: "Segmentation",
  question: "Psychographic segmentation focuses on:",
  answers: [
    "Inventory systems",
    "Lifestyle and personality",
    "Shipping methods",
    "Product defects"
  ],
  correct: 1
},

{
  id: 11,
  category: "SWOT",
  question: "What does SWOT stand for?",
  answers: [
    "Sales, Work, Operations, Timing",
    "Strengths, Weaknesses, Opportunities, Threats",
    "Systems, Weaknesses, Objectives, Targets",
    "Strategy, Work, Opportunities, Trends"
  ],
  correct: 1
},

{
  id: 12,
  category: "SWOT",
  question: "Which is considered an internal factor in SWOT?",
  answers: [
    "Competition",
    "Economic conditions",
    "Strengths",
    "Government regulations"
  ],
  correct: 2
},

{
  id: 13,
  category: "SWOT",
  question: "Threats are considered:",
  answers: [
    "Internal factors",
    "External factors",
    "Financial statements",
    "Pricing strategies"
  ],
  correct: 1
},

{
  id: 14,
  category: "BCG Matrix",
  question: "What does the BCG Matrix evaluate?",
  answers: [
    "Employee performance",
    "Product portfolio performance",
    "Tax strategies",
    "Warehouse inventory"
  ],
  correct: 1
},

{
  id: 15,
  category: "BCG Matrix",
  question: "Which BCG category has high market growth and high market share?",
  answers: [
    "Dogs",
    "Cash Cows",
    "Stars",
    "Question Marks"
  ],
  correct: 2
},

{
  id: 16,
  category: "BCG Matrix",
  question: "Cash Cows typically:",
  answers: [
    "Require heavy investment",
    "Generate stable cash flow",
    "Have low market share",
    "Are brand new products"
  ],
  correct: 1
},

{
  id: 17,
  category: "Marketing Research",
  question: "Marketing research helps businesses:",
  answers: [
    "Avoid customers",
    "Understand consumer behavior",
    "Replace management",
    "Eliminate products"
  ],
  correct: 1
},

{
  id: 18,
  category: "Marketing Research",
  question: "Primary research involves:",
  answers: [
    "Using existing published data",
    "Collecting new information directly",
    "Ignoring customers",
    "Reducing advertisements"
  ],
  correct: 1
},

{
  id: 19,
  category: "Marketing Research",
  question: "Surveys are an example of:",
  answers: [
    "Secondary research",
    "Primary research",
    "Accounting methods",
    "Pricing systems"
  ],
  correct: 1
},

{
  id: 20,
  category: "Target Market",
  question: "A target market is:",
  answers: [
    "Every customer in the world",
    "A specific group of intended customers",
    "Only online customers",
    "Only loyal customers"
  ],
  correct: 1
},

{
  id: 21,
  category: "Target Market",
  question: "Positioning refers to:",
  answers: [
    "Employee hierarchy",
    "How consumers perceive a brand",
    "Warehouse organization",
    "Tax filing systems"
  ],
  correct: 1
},

{
  id: 22,
  category: "Promotion",
  question: "Advertising is part of which marketing mix element?",
  answers: [
    "Price",
    "Promotion",
    "Place",
    "Product"
  ],
  correct: 1
},

{
  id: 23,
  category: "Promotion",
  question: "Public relations mainly focuses on:",
  answers: [
    "Building positive public image",
    "Reducing taxes",
    "Inventory control",
    "Employee scheduling"
  ],
  correct: 0
},

{
  id: 24,
  category: "Consumer Behavior",
  question: "Cognitive dissonance occurs when:",
  answers: [
    "Customers feel uncertainty after purchase",
    "Customers skip advertisements",
    "Products are defective",
    "Prices increase"
  ],
  correct: 0
},

{
  id: 25,
  category: "Marketing Strategy",
  question: "STP stands for:",
  answers: [
    "Sales, Timing, Promotion",
    "Segmentation, Targeting, Positioning",
    "Strategy, Target, Pricing",
    "Systems, Timing, Planning"
  ],
  correct: 1
},

{
  id: 26,
  category: "Marketing Strategy",
  question: "Targeting occurs after:",
  answers: [
    "Positioning",
    "Segmentation",
    "Promotion",
    "Distribution"
  ],
  correct: 1
},

{
  id: 27,
  category: "Product",
  question: "A product can be:",
  answers: [
    "Only physical goods",
    "Goods, services, or ideas",
    "Only services",
    "Only online items"
  ],
  correct: 1
},

{
  id: 28,
  category: "Pricing",
  question: "Discount pricing is used to:",
  answers: [
    "Increase customer purchases",
    "Reduce quality",
    "Eliminate products",
    "Avoid promotions"
  ],
  correct: 0
},

{
  id: 29,
  category: "Distribution",
  question: "Distribution channels help products:",
  answers: [
    "Reach consumers",
    "Increase taxes",
    "Hire workers",
    "Reduce inventory"
  ],
  correct: 0
},

{
  id: 30,
  category: "Branding",
  question: "Brand equity refers to:",
  answers: [
    "A company's taxes",
    "The value of a brand name",
    "Employee salaries",
    "Store rent"
  ],
  correct: 1
},
  
];
