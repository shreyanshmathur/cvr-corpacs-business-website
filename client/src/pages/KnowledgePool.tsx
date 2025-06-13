import { Link } from "wouter";
import { BookOpen, Download, FileText, Clock, ArrowRight, Search } from "lucide-react";
import { useState } from "react";

export default function KnowledgePool() {
  const [searchTerm, setSearchTerm] = useState("");

  const documents = [
    {
      id: 1,
      title: "Accounts and Records in GST",
      description: "Comprehensive guide on maintaining accounts and records under GST law, including mandatory documentation, retention periods, and compliance requirements.",
      category: "Compliance",
      readTime: "15 min read",
      lastUpdated: "2024-01-15",
      tags: ["GST", "Record Keeping", "Compliance", "Documentation"],
      content: `Assessment in GST is mainly focused on self-assessment by the taxpayers themselves. Every taxpayer is required to self assess the taxes payable and furnish a return for specified tax periods. Section 35 of the CGST Act, 2017 provides that every registered person shall keep and maintain, at his principal place of business, a true and correct account of production or manufacture of goods, inward and outward supply of goods or services, stock of goods, input tax credit availed, output tax payable and paid, and such other particulars as may be prescribed.

Key Requirements:
• Records must be maintained at the principal place of business
• All accounts must be kept for 72 months from the due date of furnishing annual return
• Electronic records are permitted and must be authenticated
• Separate accounts required for advances, tax details, and supplier information

The law empowers the Commissioner to specify additional accounts or documents for specific purposes and mandates audit by chartered accountant or cost accountant for taxpayers whose turnover exceeds prescribed limits.`
    },
    {
      id: 2,
      title: "Advance Ruling Mechanism in GST",
      description: "Understanding the advance ruling system, its objectives, application process, and how it provides certainty in tax liability determination.",
      category: "Legal",
      readTime: "12 min read",
      lastUpdated: "2024-01-10",
      tags: ["Advance Ruling", "Tax Planning", "Legal", "AAR"],
      content: `An advance ruling helps the applicant in planning activities liable for GST payment well in advance. It brings certainty in determining tax liability, as the ruling given by the Authority for Advance Ruling is binding on the applicant and Government authorities.

Key Benefits:
• Provides certainty in tax liability in advance
• Attracts Foreign Direct Investment (FDI)
• Reduces litigation
• Expeditious and transparent process

The Authority for Advance Ruling (AAR) and Appellate Authority for Advance Ruling (AAAR) are constituted under respective State/UT Acts. Rulings are binding only on the applicant and concerned officers within that jurisdiction.

Application Process:
• Submit application in prescribed format
• Pay required fees
• Provide complete facts and circumstances
• Await ruling within stipulated timeframe`
    },
    {
      id: 3,
      title: "Appeals and Review Mechanism under GST",
      description: "Complete overview of the appellate structure in GST, including time limits, pre-deposit requirements, and tribunal procedures.",
      category: "Legal",
      readTime: "18 min read",
      lastUpdated: "2024-01-08",
      tags: ["Appeals", "Tribunal", "Legal Process", "Dispute Resolution"],
      content: `GST implements a comprehensive appellate mechanism to resolve disputes between taxpayers and tax authorities. The system provides multiple levels of appeal ensuring fair resolution of tax disputes.

Appellate Structure:
• First Appeal: Appellate Authority (AA)
• Second Appeal: GST Tribunal
• Higher Appeals: High Court and Supreme Court

Key Features:
• 3-month time limit for filing appeals to AA
• Pre-deposit requirements for appeals
• Natural justice principles followed
• Cross-empowerment between CGST and SGST officers

The Tribunal has two tiers: National/Regional Benches for place of supply issues and State/Area Benches for other disputes. Appeals involving amounts of Rs. 50,000 or less may not be admitted by the Tribunal at its discretion.`
    },
    {
      id: 4,
      title: "Basic Concepts and General Information",
      description: "Fundamental concepts of GST including input tax, output tax, legal framework, and the core mechanism of value-added taxation.",
      category: "Fundamentals",
      readTime: "10 min read",
      lastUpdated: "2024-01-12",
      tags: ["GST Basics", "Input Tax", "Output Tax", "Value Added Tax"],
      content: `GST stands for Goods and Services Tax, introduced in India on 1st July 2017. It is based on the value-added tax concept, where suppliers pay tax only on the value addition between input and output.

Core Formula: Tax Payable = Output Tax - Input Tax

Legal Framework:
• Central Goods and Services Tax (CGST) Act
• State Goods and Services Tax (SGST) Acts
• Integrated Goods and Services Tax (IGST) Act
• Union Territory Goods and Services Tax (UTGST) Act

Key Features:
• Destination-based tax collected at consumption point
• Unified system replacing multiple indirect taxes
• Charged at each stage with input tax credit
• Eliminates cascading effect of taxes

The system is technology-driven with online processes for registration, returns, payments, and refunds through the GST portal.`
    },
    {
      id: 5,
      title: "Benefits of Goods and Services Tax (GST)",
      description: "Comprehensive analysis of GST benefits for industry, government, and citizens, including economic advantages and operational improvements.",
      category: "Overview",
      readTime: "14 min read",
      lastUpdated: "2024-01-05",
      tags: ["GST Benefits", "Economic Impact", "Industry Growth", "Compliance"],
      content: `GST brings significant benefits to all stakeholders - industry, government, and citizens. It is expected to lower costs, boost economy, and make Indian products globally competitive.

Key Benefits:
• Creates common national market with uniform tax rates
• Eliminates cascading effect through comprehensive input tax credit
• Supports 'Make in India' initiative
• Zero-rated exports unlike previous fragmented system
• Technology-driven with simplified procedures

Economic Impact:
• Expected to increase GDP by 1.5% to 2%
• Improves India's Ease of Doing Business ranking
• Widens tax base and improves compliance
• Reduces compliance costs and administrative burden

For businesses, GST provides seamless input tax credit, uniform procedures, and transparent tax structure. For consumers, it reduces tax burden and increases transparency in taxation.`
    },
    {
      id: 6,
      title: "Cancellation of Registration in GST",
      description: "Detailed procedures for GST registration cancellation, reasons for cancellation, final return requirements, and legal implications.",
      category: "Compliance",
      readTime: "16 min read",
      lastUpdated: "2024-01-03",
      tags: ["Registration", "Cancellation", "Compliance", "Final Returns"],
      content: `GST registration can be cancelled for specified reasons, either by department initiative or taxpayer application. The process involves specific procedures and compliance requirements.

Reasons for Cancellation:
• Business discontinuation, transfer, or disposal
• Change in business constitution
• No longer liable for registration
• Contravention of GST provisions
• Non-filing of returns for specified periods
• Registration obtained through fraud

Cancellation Process:
• Show cause notice in Form GST REG-17
• Reply within 7 working days in Form GST REG-18
• Final order in Form GST REG-19 or GST REG-20
• Payment of arrears and input tax credit reversal

Important: Cancelled persons must file final returns within 3 months and pay amounts equivalent to input tax credit on stocks held. Cancellation doesn't affect liability for previous periods.`
    },
    {
      id: 7,
      title: "Casual Taxable Person in GST",
      description: "Complete guide for casual taxable persons including registration requirements, advance deposit, return filing, and refund procedures.",
      category: "Registration",
      readTime: "13 min read",
      lastUpdated: "2024-01-01",
      tags: ["Casual Taxable Person", "Registration", "Advance Deposit", "Returns"],
      content: `A casual taxable person occasionally undertakes transactions involving supply of goods or services in a State/UT where they have no fixed place of business.

Key Requirements:
• Compulsory registration (except specified handicraft goods)
• No threshold limit for registration
• Cannot opt for composition scheme
• Must apply 5 days before business commencement
• Advance deposit equivalent to estimated tax liability

Registration Process:
• Validate PAN, mobile number, and email in Part A of Form GST REG-01
• Submit application in Part B with required documents
• Make advance deposit for estimated tax liability
• Receive registration certificate valid for specified period or 90 days

Return Filing:
• Form GSTR-1: Details of outward supplies (by 10th)
• Form GSTR-3B: Summary return (by 20th)
• Currently, only GSTR-1 and GSTR-3B required

Refund of balance advance deposit available after filing all returns for the registration period.`
    },
    {
      id: 8,
      title: "Compensation Cess in GST",
      description: "Understanding compensation cess levy, exemptions, input tax credit utilization, and state revenue compensation mechanism.",
      category: "Taxation",
      readTime: "11 min read",
      lastUpdated: "2023-12-28",
      tags: ["Compensation Cess", "State Revenue", "Input Tax Credit", "Exports"],
      content: `The Goods and Services Tax (Compensation to States) Act, 2017 levies compensation cess to compensate States for revenue loss due to GST implementation for five years from July 1, 2017.

Key Features:
• Levied on select notified goods and services
• Additional to CGST/SGST/IGST
• Collected at customs for imported goods
• Not levied on composition scheme suppliers

Input Tax Credit:
• ITC of compensation cess can only be used for compensation cess payment
• Cannot be used for CGST, SGST, or IGST payment
• Cross-utilization not permitted

Export Benefits:
• Zero-rated for exports under bond/LUT
• Refund available for cess paid on exports
• ITC refund available for cess on export-related inputs

Valuation: Where cess is levied on value basis, valuation follows Section 15 of CGST Act, 2017. For imported goods, valuation follows Customs Tariff Act, 1975.`
    },
    {
      id: 9,
      title: "Composite Supply and Mixed Supply",
      description: "Detailed explanation of composite and mixed supplies, classification principles, taxation rules, and practical examples.",
      category: "Classification",
      readTime: "17 min read",
      lastUpdated: "2023-12-25",
      tags: ["Composite Supply", "Mixed Supply", "Classification", "Principal Supply"],
      content: `GST law identifies composite and mixed supplies to address taxation of bundled goods and services with different tax rates.

Composite Supply Definition:
Supply of two or more taxable supplies naturally bundled and supplied together in ordinary course of business, with one principal supply.

Examples:
• Hotel accommodation with breakfast (principal: accommodation)
• Conference package with multiple facilities (principal: conference service)
• Goods with packing, transport, and insurance (principal: goods)

Mixed Supply Definition:
Supply of two or more individual supplies that would normally be supplied separately, combined for convenience.

Classification Rules:
• Composite Supply: Taxed at rate of principal supply
• Mixed Supply: Taxed at highest rate among component supplies
• Natural bundling test: Regular business practice
• Principal supply: Gives essential character to bundle

Determination factors include consumer perception, industry practice, and whether services are typically provided together or separately.`
    },
    {
      id: 10,
      title: "Composition Levy Scheme under GST",
      description: "Comprehensive guide to composition scheme benefits, eligibility criteria, compliance requirements, and tax calculation methods.",
      category: "Compliance",
      readTime: "19 min read",
      lastUpdated: "2023-12-22",
      tags: ["Composition Scheme", "Small Taxpayers", "Quarterly Returns", "Turnover"],
      content: `Composition levy scheme is a simplified compliance scheme for small taxpayers with easy procedures and reduced compliance burden.

Benefits:
• Fixed percentage of turnover as tax
• Quarterly tax payment and returns
• No elaborate record maintenance
• Simple quarterly return (GSTR-4)

Eligibility:
• Aggregate turnover up to Rs. 1 crore (Rs. 75 lakh for special category states)
• Cannot issue taxable invoices
• Cannot collect GST from customers
• Cannot claim input tax credit

Turnover Calculation:
• All India basis for same PAN
• Includes taxable, exempt, export, and inter-state supplies
• Excludes inward supplies under reverse charge
• Excludes taxes and cess

Registration Process:
• File intimation in Form GST CMP-01 or GST CMP-02
• Furnish stock details in Form GST ITC-03
• All registrations under same PAN must opt together
• Effective from beginning of financial year`
    },
    {
      id: 11,
      title: "Concept of Aggregate Turnover",
      description: "Understanding aggregate turnover calculation, inclusions, exclusions, and its role in registration thresholds and scheme eligibility.",
      category: "Fundamentals",
      readTime: "8 min read",
      lastUpdated: "2023-12-20",
      tags: ["Aggregate Turnover", "Registration Threshold", "Turnover Calculation"],
      content: `Aggregate turnover is crucial for determining GST registration eligibility and composition scheme qualification.

Definition:
Aggregate value of all taxable supplies (excluding reverse charge), exempt supplies, exports, and inter-state supplies of persons with same PAN, computed all-India basis, excluding taxes and cess.

Inclusions:
• Taxable supplies (intra-state and inter-state)
• Exempt supplies (nil-rated and non-taxable)
• Exports of goods or services
• Inter-state supplies between distinct persons with same PAN

Exclusions:
• Inward supplies under reverse charge mechanism
• CGST, SGST, UTGST, IGST, and compensation cess
• Value of supplies received for which recipient pays tax

Importance:
• Registration threshold: Rs. 20 lakhs (Rs. 10 lakhs for special category states)
• Composition scheme eligibility
• Various exemption and scheme thresholds

Note: Aggregate turnover differs from state-wise turnover used for composition scheme tax calculation.`
    },
    {
      id: 12,
      title: "Credit Note in GST",
      description: "Complete procedures for issuing credit notes, format requirements, tax liability adjustments, and matching mechanisms.",
      category: "Documentation",
      readTime: "14 min read",
      lastUpdated: "2023-12-18",
      tags: ["Credit Note", "Tax Adjustment", "Returns", "Documentation"],
      content: `Credit notes allow suppliers to reduce tax liability when original invoice value or tax is found to exceed actual liability or when goods are returned or found deficient.

When to Issue:
• Taxable value exceeds actual value
• Tax rate higher than applicable
• Quantity received less than invoiced
• Quality deficiency requiring reimbursement
• Goods returned by recipient

Format Requirements:
• Supplier's name, address, and GSTIN
• Nature of document and serial number
• Date of issue
• Recipient's details and GSTIN/UIN
• Original invoice details
• Value and tax amount credited

Tax Liability Adjustment:
• Declare in return for month of issue
• Time limit: September following financial year or annual return date
• Subject to matching with recipient's ITC reduction
• Cannot reduce if tax incidence passed to others

Matching Process:
• Credit note details matched with recipient's ITC reduction
• Discrepancies communicated to both parties
• Unmatched amounts added back to supplier's liability`
    },
    {
      id: 13,
      title: "Debit Note in GST",
      description: "Understanding debit note issuance procedures, format requirements, tax liability implications, and supplementary invoice treatment.",
      category: "Documentation",
      readTime: "9 min read",
      lastUpdated: "2023-12-15",
      tags: ["Debit Note", "Supplementary Invoice", "Tax Liability", "Documentation"],
      content: `Debit notes allow suppliers to increase tax liability when original invoice value or tax is less than actual liability.

When to Issue:
• Taxable value less than actual value
• Tax rate lower than applicable
• Quantity received more than invoiced
• Any other reason requiring upward revision

Format Requirements:
• Supplier's name, address, and GSTIN
• Nature of document and serial number
• Date of issue
• Recipient's details and GSTIN/UIN
• Original invoice details
• Value and tax amount debited

Tax Liability:
• Creates additional tax liability
• Treatment identical to tax invoice
• Include in returns and tax payment
• Same compliance as original invoice

Record Maintenance:
• Retain for 72 months from annual return due date
• Keep at every related place of business
• Accessible for verification and audit

Benefits:
• Legal method to enhance invoice value
• Allows easy tax liability adjustment
• Avoids complex rectification procedures
• Maintains proper audit trail

The debit note provides convenient mechanism for suppliers to correct undercharged values or taxes without complex procedural requirements.`
    }
  ];

  const categories = ["All", "Fundamentals", "Compliance", "Legal", "Registration", "Taxation", "Classification", "Documentation", "Overview"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const downloadPDF = (doc: any) => {
    // Create a simple PDF-like content structure
    const pdfContent = `
${doc.title}

Category: ${doc.category}
Last Updated: ${doc.lastUpdated}
Reading Time: ${doc.readTime}

Description:
${doc.description}

Content:
${doc.content}

Tags: ${doc.tags.join(', ')}

---
This document is provided by CVR Corpacs LLP
For more information, visit our website or contact us at info@cvrcorpacs.com
    `.trim();

    // Create and download the file
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${doc.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
              Knowledge Pool
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive GST documentation and guides to help you navigate complex taxation requirements. 
              All documents are professionally curated and available for download.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search documents, topics, or tags..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-red-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDocuments.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No documents found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filters.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredDocuments.map((doc) => (
                <article key={doc.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            doc.category === "Fundamentals" ? "bg-blue-100 text-blue-700" :
                            doc.category === "Compliance" ? "bg-green-100 text-green-700" :
                            doc.category === "Legal" ? "bg-purple-100 text-purple-700" :
                            doc.category === "Registration" ? "bg-orange-100 text-orange-700" :
                            doc.category === "Taxation" ? "bg-red-100 text-red-700" :
                            doc.category === "Classification" ? "bg-yellow-100 text-yellow-700" :
                            doc.category === "Documentation" ? "bg-indigo-100 text-indigo-700" :
                            "bg-gray-100 text-gray-700"
                          }`}>
                            {doc.category}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {doc.readTime}
                          </div>
                        </div>
                        <h2 className="text-xl font-bold font-heading text-gray-900 mb-3">
                          {doc.title}
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {doc.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {doc.tags.slice(0, 4).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                        {doc.tags.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            +{doc.tags.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-500">
                        Updated: {new Date(doc.lastUpdated).toLocaleDateString()}
                      </div>
                      <button
                        onClick={() => downloadPDF(doc)}
                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Personalized Guidance?</h2>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              While our knowledge pool provides comprehensive information, our experts can provide personalized 
              guidance tailored to your specific business needs and circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FileText className="h-5 w-5 mr-2" />
                Consult Our Experts
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center text-red-100 hover:text-white transition-colors"
              >
                View Our Services
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}