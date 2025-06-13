import { Link } from "wouter";
import { BookOpen, Download, FileText, Clock, ArrowRight, Search, Filter, Calendar, Tag } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import jsPDF from 'jspdf';

export default function KnowledgePool() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // PDF generation function
  const generatePDF = (doc: any) => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    const lineHeight = 7;
    let yPosition = margin;

    // Add title
    pdf.setFontSize(18);
    pdf.setFont("helvetica", "bold");
    const titleLines = pdf.splitTextToSize(doc.title, pageWidth - 2 * margin);
    pdf.text(titleLines, margin, yPosition);
    yPosition += titleLines.length * lineHeight + 10;

    // Add metadata
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.text(`Category: ${doc.category}`, margin, yPosition);
    yPosition += lineHeight;
    pdf.text(`Reading Time: ${doc.readTime}`, margin, yPosition);
    yPosition += lineHeight;
    pdf.text(`Last Updated: ${doc.lastUpdated}`, margin, yPosition);
    yPosition += lineHeight;
    pdf.text(`Tags: ${doc.tags.join(', ')}`, margin, yPosition);
    yPosition += lineHeight + 10;

    // Add description
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "italic");
    const descLines = pdf.splitTextToSize(doc.description, pageWidth - 2 * margin);
    pdf.text(descLines, margin, yPosition);
    yPosition += descLines.length * lineHeight + 10;

    // Add content
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "normal");
    const contentLines = pdf.splitTextToSize(doc.content, pageWidth - 2 * margin);
    
    contentLines.forEach((line: string) => {
      if (yPosition > pdf.internal.pageSize.getHeight() - margin) {
        pdf.addPage();
        yPosition = margin;
      }
      pdf.text(line, margin, yPosition);
      yPosition += lineHeight;
    });

    // Add footer
    pdf.addPage();
    yPosition = margin;
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "italic");
    pdf.text("Downloaded from CVR Corpacs LLP Knowledge Pool", margin, yPosition);
    yPosition += lineHeight;
    pdf.text("Website: https://cvrcorpacs.com", margin, yPosition);
    yPosition += lineHeight;
    pdf.text("Contact: info@cvrcorpacs.com", margin, yPosition);

    // Save the PDF
    pdf.save(`${doc.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
  };

  const documents = [
    {
      id: 1,
      title: "Accounts and Records in GST",
      description: "Comprehensive guide on maintaining proper books of accounts, record-keeping requirements, and documentation under GST law.",
      category: "Compliance",
      readTime: "15 min read",
      lastUpdated: "2024-01-15",
      tags: ["Accounts", "Records", "Documentation", "Compliance"],
      content: `Under GST, every registered person must maintain proper books of accounts and records. This includes detailed records of all business transactions, tax computations, and supporting documents.

Key Requirements:
• Records must be maintained at the principal place of business
• Electronic records permitted with proper authentication
• Retention period: 72 months from due date of annual return
• Availability for verification by tax authorities

Essential Documents:
• Production or manufacture records
• Inward and outward supply registers
• Stock records and inventory management
• Input tax credit records
• Output tax payable and paid records
• Banking records and payment documents

Electronic Record Keeping:
• Digital format acceptable with authentication
• Backup and security requirements
• Audit trail maintenance
• Data integrity and accessibility

Consequences of Non-Compliance:
• Penalty provisions under Section 122
• Assessment procedures if records inadequate
• Disallowance of input tax credit claims
• Potential criminal prosecution for willful default

The maintenance of proper accounts and records forms the foundation of GST compliance and helps in smooth business operations while ensuring transparency with tax authorities.`
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
      tags: ["GST Basics", "Value Added Tax", "Input Tax", "Output Tax"],
      content: `GST is a comprehensive value-added tax system that replaced multiple indirect taxes in India. It operates on the principle of 'One Nation, One Tax, One Market' to create a unified national market.

Core Concepts:
• Input Tax: Tax paid on purchases/inputs
• Output Tax: Tax collected on sales/supplies
• Input Tax Credit: Set-off of input tax against output tax
• Place of Supply: Determines applicable tax (CGST+SGST or IGST)

Legal Framework:
• Constitutional Amendment (101st) enabling GST
• Four Acts: CGST, SGST, UTGST, and IGST
• Rules and notifications for implementation
• GST Council for policy decisions

Value-Added Taxation:
• Tax levied at each stage of supply chain
• Credit of taxes paid at previous stages
• Eliminates cascading effect of taxes
• Final consumer bears the tax burden

The GST system ensures transparency, reduces compliance burden, and promotes economic growth through simplified tax structure and seamless credit flow.`
    },
    {
      id: 5,
      title: "Benefits of Goods and Services Tax (GST)",
      description: "Comprehensive analysis of advantages GST brings to businesses, consumers, and the economy through unified taxation and simplified compliance.",
      category: "Overview",
      readTime: "8 min read",
      lastUpdated: "2024-01-05",
      tags: ["Benefits", "Economic Growth", "Compliance", "Unified Tax"],
      content: `GST implementation has revolutionized India's indirect tax system, bringing numerous advantages to all stakeholders in the economy.

Benefits for Businesses:
• Simplified tax structure with unified compliance
• Seamless input tax credit across the country
• Reduced logistics costs due to elimination of checkposts
• Online processes reducing human interface
• Improved ease of doing business

Benefits for Consumers:
• Reduction in overall tax burden on goods
• Transparency in taxation with clear breakup
• Simplified supply chain reducing costs
• Better quality goods due to formal economy growth

Economic Benefits:
• Increased tax base and revenue collection
• GDP growth through reduced compliance costs
• Formalization of economy
• Improved competitiveness of Indian goods

Administrative Benefits:
• Technology-driven tax administration
• Reduced tax evasion through data analytics
• Better coordination between Centre and States
• Simplified return filing and assessment procedures

The GST system has created a more efficient, transparent, and growth-oriented tax environment that benefits the entire Indian economy.`
    },
    {
      id: 6,
      title: "Cancellation of Registration in GST",
      description: "Detailed procedures for voluntary and involuntary cancellation of GST registration, including timelines and compliance requirements.",
      category: "Registration",
      readTime: "11 min read",
      lastUpdated: "2024-01-03",
      tags: ["Registration", "Cancellation", "Compliance", "Procedures"],
      content: `Cancellation of GST registration may be voluntary (by taxpayer) or involuntary (by tax authorities) under specific circumstances defined in the GST law.

Voluntary Cancellation:
• Business discontinuation or closure
• Turnover falls below threshold limit
• Transfer of business as going concern
• Application required within 30 days

Involuntary Cancellation:
• Non-filing of returns for continuous 6 months
• Non-commencement of business within 6 months
• Non-payment of tax exceeding Rs. 10,000 for 6 months
• Fake or fraudulent registration

Procedure:
• Online application on GST portal
• Declaration of stock on hand
• Payment of outstanding dues
• Final return submission

Consequences:
• Loss of input tax credit on stock
• Liability to pay tax on stock transfer
• Reversal of credit taken on assets
• Compliance with post-cancellation obligations

Timeline:
• Application processing within 30 days
• Show cause notice if deficiencies found
• Order passed within specified time limit
• Appeal rights available against orders`
    },
    {
      id: 7,
      title: "Casual Taxable Person in GST",
      description: "Understanding the concept of casual taxable persons, registration requirements, and compliance obligations for temporary business activities.",
      category: "Registration",
      readTime: "9 min read",
      lastUpdated: "2024-01-01",
      tags: ["Casual Taxable Person", "Temporary Business", "Registration", "Compliance"],
      content: `A casual taxable person is someone who occasionally undertakes transactions involving supply of goods or services in a state where they don't have a fixed place of business.

Key Characteristics:
• Temporary business activities
• No fixed place of business in the state
• Occasional transactions only
• Limited period operations

Registration Requirements:
• Mandatory registration regardless of turnover
• Application at least 5 days before business commencement
• Advance deposit of estimated tax liability
• Registration valid for specified period (max 90 days)

Compliance Obligations:
• Regular return filing
• Tax payment from advance deposit
• Proper invoice issuance
• Maintenance of prescribed records

Advance Deposit:
• Estimated tax liability for the period
• Bank guarantee as alternative
• Adjustment against actual tax liability
• Refund of unused amount after cancellation

Common Examples:
• Exhibition participants
• Seasonal businesses
• Event organizers
• Contractors for specific projects

Extension and Cancellation:
• Extension possible for additional periods
• Application before expiry of current validity
• Automatic cancellation on validity expiry
• Final return submission mandatory`
    },
    {
      id: 8,
      title: "Compensation Cess in GST",
      description: "Understanding the GST compensation cess mechanism, its purpose, calculation methods, and impact on specific goods and services.",
      category: "Taxation",
      readTime: "13 min read",
      lastUpdated: "2023-12-28",
      tags: ["Compensation Cess", "Luxury Goods", "Sin Goods", "State Compensation"],
      content: `Compensation cess is an additional levy imposed on specific goods and services to compensate states for revenue loss due to GST implementation during the transition period.

Purpose:
• Compensate states for revenue shortfall
• Ensure states maintain pre-GST revenue levels
• Provide cushion during GST transition period
• Enable smooth GST implementation

Applicable Goods:
• Luxury goods (cars above specified value)
• Sin goods (tobacco, cigarettes, gutka)
• Aerated drinks and carbonated beverages
• Coal and lignite

Calculation:
• Ad valorem rate (percentage of value)
• Specific rate (fixed amount per unit)
• Mixed rate (combination of both)
• Additional to GST rates

Collection and Utilization:
• Collected by Central Government
• Credited to Compensation Cess Fund
• Distributed to states based on formula
• Used exclusively for state compensation

Rate Structure:
• Varies by commodity
• Higher rates for luxury and sin goods
• Regular review by GST Council
• Sunset clause after transition period

Impact on Business:
• Additional cost component
• Separate showing in invoices
• Input credit not available
• Compliance requirements similar to GST`
    },
    {
      id: 9,
      title: "Composite Supply and Mixed Supply",
      description: "Distinguishing between composite and mixed supplies, their tax treatment, and practical implications for business transactions.",
      category: "Classification",
      readTime: "16 min read",
      lastUpdated: "2023-12-25",
      tags: ["Composite Supply", "Mixed Supply", "Classification", "Tax Rate"],
      content: `GST law provides specific definitions and tax treatment for composite and mixed supplies to ensure proper classification and tax application.

Composite Supply:
• Two or more taxable supplies made together
• Naturally bundled in ordinary course of business
• One supply is principal supply
• Taxed at rate of principal supply

Mixed Supply:
• Two or more individual supplies
• Not naturally bundled
• Made together for single consideration
• Taxed at highest rate among supplies

Identification Criteria:
• Business practice analysis
• Customer requirement assessment
• Natural bundling evaluation
• Principal supply determination

Examples:
Composite Supply:
• Hotel accommodation with food
• Mobile phone with charger
• Car with insurance and accessories

Mixed Supply:
• Gift hamper with various items
• Package deal with unrelated services
• Bundle of different products

Tax Implications:
• Correct classification affects tax rate
• Input credit eligibility considerations
• Compliance and documentation requirements
• Place of supply determination

Business Impact:
• Pricing strategy implications
• Contract structuring considerations
• Invoice and accounting treatment
• Customer communication requirements`
    },
    {
      id: 10,
      title: "Composition Levy Scheme under GST",
      description: "Complete guide to the composition scheme, eligibility criteria, tax rates, compliance requirements, and withdrawal provisions.",
      category: "Taxation",
      readTime: "14 min read",
      lastUpdated: "2023-12-22",
      tags: ["Composition Scheme", "Small Taxpayers", "Simplified Compliance", "Tax Rates"],
      content: `The composition levy scheme is a simplified tax regime for small taxpayers to reduce compliance burden while maintaining tax collection.

Eligibility Criteria:
• Annual turnover up to Rs. 1.5 crore
• Not engaged in inter-state supplies
• Not engaged in specified activities (manufacturing ice cream, pan masala)
• Not an e-commerce operator

Benefits:
• Lower tax rates
• Simplified return filing (quarterly)
• Reduced compliance burden
• No requirement to maintain detailed records

Tax Rates:
• Manufacturers: 1% for goods, 6% for restaurants
• Traders: 0.5% for goods
• Service providers: 6% of turnover
• Mixed suppliers: applicable rates on respective turnover

Restrictions:
• Cannot collect tax from customers
• No input tax credit available
• Cannot issue tax invoices
• Limited to intra-state supplies only

Compliance:
• Quarterly return filing (GSTR-4)
• Annual return mandatory
• Payment of tax by 18th of succeeding month
• Intimation for any changes in business

Withdrawal:
• Voluntary withdrawal allowed
• Automatic withdrawal if conditions violated
• Effect from beginning of financial year
• Input credit not available on stock`
    },
    {
      id: 11,
      title: "Concept of Aggregate Turnover",
      description: "Understanding aggregate turnover calculation, inclusions and exclusions, and its significance in GST registration and compliance.",
      category: "Fundamentals",
      readTime: "10 min read",
      lastUpdated: "2023-12-20",
      tags: ["Aggregate Turnover", "Registration Threshold", "Calculation", "Compliance"],
      content: `Aggregate turnover is the total value of taxable and exempt supplies made by a person having the same PAN, crucial for determining registration requirements and scheme eligibility.

Definition:
• All India turnover of taxable supplies
• Exempt supplies included
• Inward supplies on reverse charge basis
• Value of supplies on which tax is paid

Inclusions:
• Taxable supplies (goods and services)
• Exempt supplies
• Exports and zero-rated supplies
• Reverse charge supplies received

Exclusions:
• Central tax, State tax, Union territory tax, integrated tax
• Compensation cess
• Value of inward supplies on which tax is paid on reverse charge basis by recipient
• Import of services

Calculation Method:
• Financial year basis for threshold determination
• All supplies across India to be aggregated
• Multiple registrations with same PAN clubbed together
• Previous year turnover for current year decisions

Significance:
• Registration threshold determination
• Composition scheme eligibility
• Return filing frequency
• Audit requirements

Common Mistakes:
• Excluding exempt supplies
• Not aggregating across states
• Confusion between taxable and aggregate turnover
• Incorrect treatment of reverse charge

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
• Additional supplies made
• Errors in original invoice requiring upward revision

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
    },
    {
      id: 14,
      title: "Deemed Exports in GST",
      description: "Understanding deemed export provisions, eligibility criteria, procedure for claiming refunds, and compliance requirements.",
      category: "Export",
      readTime: "16 min read",
      lastUpdated: "2024-01-20",
      tags: ["Deemed Export", "Refund", "Zero Rating", "EOU"],
      content: `"Deemed Exports" refers to supplies of goods manufactured in India which are notified as deemed exports under Section 147 of the CGST/SGST Act, 2017. The supplies do not leave India but payment is received either in Indian rupees or in convertible foreign exchange.

Categories of Deemed Exports:
• Supply of goods against Advance Authorisation
• Supply of capital goods against Export Promotion Capital Goods Authorisation  
• Supply of goods to Export Oriented Unit
• Supply of gold by banks/PSUs against Advance Authorisation

Key Features:
• Not zero rated supplies by default
• Subject to levy of taxes initially
• Tax refund admissible to supplier or recipient
• Application for refund by supplier or recipient

Procedure for EOU Supplies:
• Prior intimation by recipient EOU in Form-A
• Details of goods and supplier information
• Intimation to supplier and GST officers
• Supply under tax invoice to EOU unit

Refund Process:
• Either recipient or supplier can claim refund
• Specific documentation requirements
• Rule 89 of CGST Rules, 2017 governs procedure
• Separate notifications specify evidence requirements`
    },
    {
      id: 15,
      title: "Electronic Cash/Credit Ledgers and Liability Register",
      description: "Comprehensive overview of electronic registers, ledger maintenance, liability tracking, and credit utilization in GST portal.",
      category: "Compliance",
      readTime: "18 min read",
      lastUpdated: "2024-01-18",
      tags: ["Electronic Ledger", "Liability Register", "Credit Ledger", "GST Portal"],
      content: `Each registered taxpayer has one electronic liability register and two electronic ledgers: Electronic Cash Ledger and Electronic Credit Ledger on the common portal.

Electronic Liability Register (Form GST PMT-01):
Part I - Return Related Liabilities:
• All liabilities from returns and payments
• Composition scheme liabilities
• Registration cancellation liabilities

Part II - Other Liabilities:
• Appeal/revision related adjustments
• Pre-deposit refunds
• Voluntary payments against show cause notices
• Penalty reductions based on payments

Electronic Cash Ledger:
• Maintains cash deposits for tax payments
• Credited by: Cash deposits, bank transfers, input service distributor credits
• Debited by: Tax payments, interest, penalty payments

Electronic Credit Ledger:
• Input tax credit balance maintenance
• Auto-populated from returns
• Set-off sequence: CGST→CGST→IGST, SGST→SGST→IGST, IGST→IGST→CGST/SGST
• Cannot transfer credit between taxpayers

Liability Register Features:
• Real-time liability tracking
• Automatic reduction based on appellate reliefs
• Integration with penalty and interest calculations
• Historical transaction maintenance`
    },
    {
      id: 16,
      title: "Electronic Way Bill in GST",
      description: "Complete guide to e-way bill generation, compliance requirements, validity periods, and penalty provisions for goods movement.",
      category: "Compliance",
      readTime: "20 min read",
      lastUpdated: "2024-01-16",
      tags: ["E-way Bill", "Goods Movement", "Transportation", "Compliance"],
      content: `Electronic Way Bill (E-Way Bill) is a digital document required for movement of goods worth more than Rs. 50,000. It ensures proper documentation and tracking of goods in transit.

Components:
Part A - Invoice Details:
• GSTIN of recipient and delivery location
• Invoice/challan number and date
• Goods value and HSN code
• Transport document number
• Reason for transportation

Part B - Transporter Details:
• Vehicle number
• Transporter information

Who Generates E-way Bill:
• Consignor/Consignee for own/hired conveyance
• Transporter for road transportation
• Mandatory for handicraft goods inter-state movement by unregistered persons

Generation Process:
• Online generation on GST portal
• Unique E-way Bill Number (EBN) generated
• Details shared with supplier, recipient, and transporter
• Recipient acceptance/rejection within 72 hours

Validity Periods:
• Less than 100 km: 1 day
• 100-300 km: 3 days  
• 300-500 km: 5 days
• 500-1000 km: 10 days
• More than 1000 km: 15 days

Penalties:
• Rs. 10,000 or tax amount (whichever is higher)
• Detention and release procedures
• Vehicle seizure provisions`
    },
    {
      id: 17,
      title: "Goods Transport Agency in GST",
      description: "Understanding GTA services, tax rates, reverse charge mechanism, and compliance requirements for transportation services.",
      category: "Services",
      readTime: "15 min read",
      lastUpdated: "2024-01-14",
      tags: ["GTA", "Transportation", "Reverse Charge", "Consignment Note"],
      content: `Goods Transport Agency (GTA) means any person who provides service in relation to transport of goods by road and issues consignment note, by whatever name called.

Key Requirements:
• Issuance of consignment note is mandatory
• Without consignment note, not considered GTA
• Services exempt if consignment note not issued

Consignment Note Contents:
• Serially numbered document
• Consignor and consignee names
• Goods description and quantity
• Transportation charges
• Route and destination details

GST Rates on GTA Services:
• 5% (2.5% CGST + 2.5% SGST) for individual recipients
• 12% (6% CGST + 6% SGST) for business recipients
• Subject to reverse charge mechanism

Reverse Charge Mechanism:
• Tax liability on recipient for specified services
• Registered recipients pay GST on RCM basis
• Small transport operators (≤Rs. 75 lakh turnover) exempted from RCM
• Individual and HUF consignments exempted

Exemptions:
• Services by individuals/HUF having annual turnover ≤Rs. 20 lakh
• Transportation by railways, air, vessel
• Courier services (separate category)

Compliance:
• Consignment note mandatory
• Proper service classification
• RCM payment by recipients
• Input credit availability as per rules`
    },
    {
      id: 18,
      title: "GST on Advances Received for Future Supplies",
      description: "Time of supply provisions, advance payment taxation, compliance requirements, and rate change implications for advance receipts.",
      category: "Compliance",
      readTime: "14 min read",
      lastUpdated: "2024-01-12",
      tags: ["Advance Payment", "Time of Supply", "Rate Changes", "Receipt Voucher"],
      content: `Time of supply determines when taxpayer must discharge tax on particular supply. For advances, time of supply is generally when payment is received.

Time of Supply Rules:
• Earliest of invoice issuance or payment receipt
• Supply deemed made to extent covered by invoice/payment
• Advance creates immediate tax liability
• Balance supply taxed when actually made

Rate Change Scenarios:
• Advance received at higher rate, supply at lower rate
• Excess tax adjustment available
• Rate reduction notifications apply retrospectively
• Refund mechanism for excess tax paid

Exemption for Small Suppliers:
• Suppliers with turnover ≤Rs. 1.5 crore exempted
• Only goods suppliers eligible (not opted for composition)
• Services always subject to advance tax

Compliance Requirements:
Receipt Voucher Contents (Rule 50):
• Supplier name, address, GSTIN
• Consecutive serial number (≤16 characters)
• Issue date
• Recipient details and GSTIN/UIN
• Goods/services description
• Advance amount taken
• Tax rate and amount
• Place of supply with state code
• Reverse charge indication
• Authorized signature

Documentation:
• Receipt voucher mandatory for advances
• Proper record maintenance
• Return filing requirements
• Credit note for supply cancellation`
    },
    {
      id: 19,
      title: "Imports in GST Regime",
      description: "Import procedures, IGST levy, valuation methods, Special Economic Zone provisions, and customs integration under GST.",
      category: "Import",
      readTime: "17 min read",
      lastUpdated: "2024-01-10",
      tags: ["Import", "IGST", "Customs", "SEZ", "Valuation"],
      content: `Under GST regime, import of goods/services is treated as deemed inter-State supply subject to Integrated Tax (IGST) in addition to customs duties.

Constitutional Framework:
• Article 269A mandates IGST on imports
• Import treated as inter-State supply
• IGST on import of services under IGST Act
• IGST on import of goods under Customs Tariff Act

Import Export Code (IEC):
• PAN used as IEC (DGFT Trade Notice 09/2017)
• Simplified procedure for IEC authorization
• GSTIN declaration where GST registered

Import of Goods:
• IGST levied in addition to customs duties
• Value: Assessable value + Basic Customs Duty + other duties
• Compensation cess on assessable value + duties
• Anti-dumping/safeguard duties included in value

Import as Baggage:
• Passenger baggage exempted from IGST and cess
• Basic customs duty at 35% + education cess
• Applicable on value exceeding duty-free allowances

Warehouse Provisions:
• Goods can be warehoused without IGST payment
• IGST payable on clearance from warehouse
• Sale from warehouse treated as supply from place of business
• Separate invoicing requirements

SEZ Supplies:
• Supplies to SEZ developer/unit treated as inter-State
• Subject to IGST levy
• Zero-rated supply treatment
• Input credit and refund provisions available

Import of Services:
• IGST under reverse charge for unregistered recipients
• Place of supply rules determine taxability
• Input credit available for business recipients`
    },
    {
      id: 20,
      title: "Input Service Distributor",
      description: "ISD mechanism, credit distribution procedures, invoice requirements, and proportionate allocation of common input services.",
      category: "Credit",
      readTime: "12 min read",
      lastUpdated: "2024-01-08",
      tags: ["ISD", "Credit Distribution", "Input Services", "Common Expenses"],
      content: `Input Service Distributor (ISD) means an office that receives tax invoices for input services and distributes credit to supplier units having same PAN.

Purpose and Scope:
• Distribution of credit on common input services only
• Not applicable for goods (inputs/capital goods)
• Head office receiving bills for common services
• Multiple units with separate registrations

Registration Requirements:
• Compulsory separate registration as ISD
• Application in Form GST REG-1
• No threshold limit for ISD registration
• Same PAN requirement for all units

Credit Distribution Process:
• ISD invoice issuance (Rule 54)
• Clear indication of credit distribution purpose
• Monthly distribution of available credit
• Separate distribution of eligible/ineligible credit

Distribution Formula:
• Pro-rata basis generally
• Based on turnover or other reasonable basis
• Equal distribution between CGST and SGST
• IGST credit distributed as IGST

Example Calculation:
• Corporate office at Bangalore
• Units at Chennai, Mumbai, Kolkata
• Software license invoice with CGST+SGST
• Distribution based on unit-wise turnover ratio

Compliance Requirements:
• Form GSTR-6 return filing
• ISD invoice in prescribed format
• Proper records maintenance
• Recipient acknowledgment of credit

Limitations:
• Only input services covered
• Same PAN units only
• Monthly distribution mandatory
• No cross-utilization between different tax heads`
    },
    {
      id: 21,
      title: "Input Tax Credit Mechanism in GST",
      description: "Comprehensive guide to ITC eligibility, documentation requirements, utilization hierarchy, and restrictions under GST law.",
      category: "Credit",
      readTime: "22 min read",
      lastUpdated: "2024-01-22",
      tags: ["Input Tax Credit", "ITC Rules", "Credit Utilization", "Documentation"],
      content: `Input Tax Credit (ITC) is the backbone of GST system, ensuring seamless credit chain and avoiding cascading effect of taxes.

Cascading Problem Solution:
• Tax on tax elimination
• Credit of Central taxes for Central taxes
• Credit of State taxes for State taxes
• IGST credit usable for all tax types

GST Structure:
• CGST (Central Goods and Services Tax)
• SGST (State Goods and Services Tax)  
• UTGST (Union Territory GST)
• IGST (Integrated GST for inter-state supplies)

Credit Utilization Hierarchy:
CGST Credit: CGST → IGST
SGST Credit: SGST → IGST  
IGST Credit: IGST → CGST, SGST, UTGST

Prerequisites for ITC:
• Possession of tax invoice/specified documents
• Actual receipt of goods/services
• Tax payment by supplier
• Return filing by recipient
• Payment to supplier within 180 days

Eligible Documents:
• Tax invoice from supplier
• Invoice with proof of tax payment
• Debit note from supplier
• Bill of Entry (imports)
• Revised invoice
• ISD document

Restrictions on ITC:
• Motor vehicles (except specified purposes)
• Food and beverages (except input/resale)
• Outdoor catering services
• Beauty treatment and health services
• Membership of clubs/fitness centers
• Travel benefits to employees
• Works contract services for immovable property
• Goods/services for personal consumption

Reversal Requirements:
• Goods used for exempted supplies
• Capital goods if business discontinued
• Non-payment to supplier beyond 180 days
• Proportionate reversal for common usage

Time Limit:
• September following financial year
• Date of filing annual return
• Whichever is earlier

Input Service Credit:
• Credit available in month of invoice
• No physical receipt requirement
• Relevant for service providers
• Subject to same documentation rules`
    },
    {
      id: 22,
      title: "Inspection, Search, Seizure and Arrest",
      description: "Powers of GST officers, procedures for inspection and search, seizure provisions, arrest conditions, and taxpayer rights.",
      category: "Legal",
      readTime: "15 min read",
      lastUpdated: "2024-01-06",
      tags: ["Inspection", "Search", "Seizure", "Arrest", "Officer Powers"],
      content: `GST law provides powers for Inspection, Search, Seizure and Arrest to protect genuine taxpayers and deter tax evasion.

Authorization Requirements:
• Joint Commissioner or above for inspection/search
• Commissioner authorization for arrests
• Written authorization mandatory
• Reasonable belief of tax evasion required

Inspection Powers:
Circumstances for Inspection:
• Suppression of transactions/stock
• Excess input tax credit claims
• Rule violations for tax evasion
• Unauthorized goods transportation
• Account/stock manipulation

Inspection During Movement:
• Consignments exceeding Rs. 50,000
• Document verification without JC authorization
• 30-minute time limit for verification
• Digital interface for transparency

Search and Seizure:
Grounds for Search:
• Suppressed transactions
• False/manipulated accounts
• Hidden/destroyed evidence
• Contravention for tax evasion

Seizure Conditions:
• Goods removed without prescribed documents
• Tax evasion in goods supply
• Valuation disputes
• Hidden stock discovery

Arrest Provisions:
Arrestable Offenses:
• Tax evasion exceeding Rs. 5 crore
• Fake invoice issuance (Rs. 2 crore)
• Availment using fake invoices (Rs. 2 crore)
• ITC fraud through fake documents

Procedures:
• Commissioner's prior approval
• Magistrate information within 24 hours
• Legal representation rights
• Bail provisions applicable

Safeguards:
• Transparent procedures
• Time-bound verifications
• Digital documentation
• Minimal physical intervention
• Accountability measures`
    },
    {
      id: 23,
      title: "Job Work under GST",
      description: "Job work provisions, movement of goods, time limits, registration requirements, and supply procedures from job worker premises.",
      category: "Manufacturing",
      readTime: "13 min read",
      lastUpdated: "2024-01-04",
      tags: ["Job Work", "Manufacturing", "Principal", "Time Limits"],
      content: `Job work sector constitutes significant industry in Indian economy. GST provides special provisions for job work arrangements.

Definition:
• Job work: Treatment/process on goods belonging to another registered person
• Job worker: Person undertaking the treatment/process
• Principal: Owner of goods sent for job work
• Ownership remains with principal

Facilities Available:
• Send inputs/capital goods without tax payment
• No ITC reversal required by principal
• Direct dispatch to job worker allowed
• ITC available on direct dispatch
• Movement between job workers permitted

Time Limits:
• Inputs: Must return within 1 year
• Capital goods: Must return within 3 years
• Extensions may be allowed by Commissioner

Job Worker Options:
• Return goods to principal
• Send to another job worker
• Clear goods on tax payment within India
• Export without tax payment
• Supply to third party from job worker premises

Supply from Job Worker Premises:
• Principal can supply from job worker location
• Job worker premises declared as additional place of business
• Not required if job worker is registered
• Tax payment on supply value

Documentation Requirements:
• Prior intimation to jurisdictional officer
• Challan for goods movement (Rule 10)
• Proper accounts maintenance by principal
• Job work details in intimation

Procedural Aspects:
• Intimation before sending goods
• Description of inputs and processing nature
• Details of multiple job workers if applicable
• Challan issuance mandatory
• Responsibility for accounts with principal

Benefits:
• Cash flow improvement
• Simplified procedures
• Reduced compliance burden
• Flexibility in operations
• Export facilitation`
    },
    {
      id: 24,
      title: "Margin Scheme in GST",
      description: "Second-hand goods taxation, margin calculation methods, purchase value determination, and exemption conditions.",
      category: "Valuation",
      readTime: "8 min read",
      lastUpdated: "2024-01-02",
      tags: ["Margin Scheme", "Second Hand Goods", "Valuation", "Purchase Price"],
      content: `Margin Scheme allows dealers in second-hand goods to pay GST only on margin (difference between selling and purchase price) to avoid double taxation.

Purpose:
• Avoid double taxation on used goods
• Goods previously bore tax incidence
• Facilitate second-hand goods trade
• Simplify valuation process

Eligibility Conditions:
• Dealing in second-hand goods
• Goods used as such or after minor processing
• No input tax credit claimed on purchase
• Purchase from unregistered person

Valuation Rules (Rule 32(5)):
• Value = Selling Price - Purchase Price
• If negative margin, no GST payable
• Additional processing costs added to margin
• Repair/refurbishing costs included

Purchase Value for Repossessed Goods:
• Original purchase price by defaulting borrower
• Reduced by 5% for every quarter between purchase and repossession
• Applicable for loan recovery cases

Exemption Notifications:
• Intra-state supplies exempted if margin scheme used
• Purchase from unregistered supplier exempted
• Both central and state tax exemptions available

Illustration - Second Hand Car:
• Purchase price: Rs. 3,00,000 (from unregistered person)
• Selling price: Rs. 3,50,000
• Margin: Rs. 50,000
• GST on Rs. 50,000 only
• Purchase exempted, sale on margin taxed

Conditions for Scheme:
• No ITC claimed on purchase
• No taxable invoice from seller
• Margin calculation properly documented
• Books of accounts maintained

Documentation:
• Purchase receipts/agreements
• Repair/refurbishing cost records
• Selling price documentation
• Margin calculation worksheets

Restrictions:
• Cannot issue taxable invoice for exempted purchase
• No ITC claim on inputs for exempted goods
• Proper segregation of margin scheme goods`
    },
    {
      id: 25,
      title: "National Anti-Profiteering Authority in GST",
      description: "Anti-profiteering mechanism, authority constitution, complaint procedures, penalty provisions, and benefit pass-through requirements.",
      category: "Legal",
      readTime: "16 min read",
      lastUpdated: "2023-12-28",
      tags: ["Anti-Profiteering", "Rate Reduction", "Consumer Protection", "Price Reduction"],
      content: `National Anti-Profiteering Authority ensures rate reductions and input credit benefits are passed to consumers through price reductions.

Objective:
• Ensure benefit pass-through to consumers
• Prevent unwarranted price increases
• Monitor compliance with rate reductions
• Protect consumer interests

Authority Constitution:
• Chairman: Secretary-level officer to Government of India
• Four Technical Members: Commissioners of Central/State tax
• Secretary: Additional Director General of Safeguards (CBEC)
• Two-year tenure unless extended by GST Council

Powers and Duties:
• Determine benefit pass-through methodology
• Identify non-compliant registered persons
• Order price reduction
• Direct benefit return with 18% interest
• Impose penalties
• Cancel registration

Complaint Process:
State Level Screening Committee:
• One State Government officer (nominated by Commissioner)
• One Central Government officer (nominated by Chief Commissioner)
• Examine local nature applications
• Forward recommendations to Standing Committee

Standing Committee on Anti-Profiteering:
• Central and State Government officers
• Nominated by GST Council
• Review screening committee recommendations
• Decide on forwarding to Authority

Application Requirements:
• Supplier not passing rate reduction benefit
• Supporting evidence and documentation
• Local nature issues first to State Committee
• National issues directly to Authority

Penalties and Orders:
• Price reduction orders
• Benefit return with interest
• Consumer Welfare Fund deposit if recipient unidentifiable
• Registration cancellation in severe cases
• Penalty imposition

Methodology:
• Authority determines pass-through calculation methods
• Sector-specific guidelines possible
• Market dynamics consideration
• Implementation procedures specification

Timeline:
• Authority ceased operations after two years
• Legacy cases may continue under successor mechanisms
• GST Council recommendations for extension considered`
    },
    {
      id: 26,
      title: "Non-resident Taxable Person in GST",
      description: "Registration procedures, advance deposit requirements, validity periods, compliance obligations for non-resident suppliers.",
      category: "Registration",
      readTime: "11 min read",
      lastUpdated: "2023-12-25",
      tags: ["Non-resident", "Registration", "Advance Deposit", "Validity Period"],
      content: `Non-resident taxable person means any person who occasionally undertakes transactions but has no fixed place of business or residence in India.

Definition and Scope:
• Occasional transactions involving supply
• Principal, agent, or other capacity supplies
• No fixed place of business in India
• No residence in India

Registration Requirements:
• Compulsory registration regardless of turnover
• No threshold limit applicable
• Cannot opt for composition levy
• At least 5 days before commencing business

Application Process:
• Form GST REG-09 submission
• Valid passport copy (self-attested)
• 5 days minimum before business start
• Electronic submission on Common Portal

Business Entity Requirements:
• Tax identification number of home country
• Unique identification number
• PAN if available in India
• Country of incorporation documentation

Authorized Signatory:
• Must be Indian resident
• Valid PAN required
• Signs registration application
• Represents non-resident for GST purposes

Advance Deposit:
• Estimated tax liability calculation
• Deposit before registration issuance
• Bank guarantee or cash deposit
• Temporary reference number for deposit

Validity Period:
• Period specified in application, or
• 90 days from effective date
• Whichever is earlier
• Extension possible for additional 90 days

Extension Process:
• Form GST REG-11 application
• Before current validity expires
• Maximum 90 days additional period
• Conditional on compliance and deposit adequacy

Supply Restrictions:
• Can supply only after registration
• Advance deposit mandatory
• Valid registration certificate required
• Compliance with all GST provisions

Compliance Obligations:
• Regular return filing
• Invoice issuance as per rules
• Tax payment from advance deposit
• Maintain prescribed books and records

Cancellation:
• Automatic on validity expiry
• Voluntary application possible
• Final returns and clearance required
• Refund of unutilized advance deposit`
    },
    {
      id: 27,
      title: "OIDAR Services in GST",
      description: "Online Information Database Access and Retrieval services, place of supply rules, tax collection mechanisms, and compliance requirements.",
      category: "Services",
      readTime: "19 min read",
      lastUpdated: "2023-12-22",
      tags: ["OIDAR", "Online Services", "Place of Supply", "Digital Services"],
      content: `OIDAR services are delivered through internet/electronic networks, essentially automated with minimal human intervention, impossible without information technology.

Definition and Scope:
• Internet advertising
• Cloud services provision
• E-books, movies, music, software through telecom networks
• Electronic data/information provision
• Online digital content supplies
• Digital data storage
• Online gaming

Need for Special Treatment:
• Remote service provision capability
• Tax advantage for overseas suppliers
• Level playing field requirement
• Consumer protection need

Place of Supply Rules:
• Supplier and recipient both in India: Recipient's location
• Supplier outside India, recipient in India: India (taxable)
• Business recipient in India: Reverse charge mechanism
• Individual consumer in India: Supplier liability

Tax Collection Mechanisms:
Business Recipients (Registered):
• Reverse charge mechanism applies
• Recipient pays GST and files returns
• Input credit available if eligible
• Normal GST compliance requirements

Individual Consumers:
• Simplified registration for overseas suppliers
• Threshold limit: Rs. 20 lakh annually
• Tax collection at source by payment gateways
• Streamlined compliance procedures

Overseas Supplier Registration:
• Simplified registration process
• Representative person not mandatory
• Electronic communication acceptance
• Bank guarantee/advance deposit waiver for small suppliers

Payment Gateway Role:
• Collect tax at source from consumers
• Remit to government treasury
• Issue tax collection certificates
• Maintain transaction records

Compliance Requirements:
• Proper service classification
• Place of supply determination
• Tax rate application (18% generally)
• Return filing obligations

Documentation:
• Electronic invoices/receipts
• Payment transaction records
• Tax collection certificates
• Consumer identity verification

Exemptions and Concessions:
• Small supplier threshold benefits
• Simplified procedures for compliant suppliers
• Reduced documentation requirements
• Electronic communication facilitation

Challenges:
• Cross-border enforcement
• Technology platform integration
• Consumer awareness requirements
• Multiple jurisdiction coordination`
    },
    {
      id: 28,
      title: "Provisional Assessment in GST",
      description: "Provisional assessment procedures, bond and security requirements, finalization process, and adjustment mechanisms.",
      category: "Assessment",
      readTime: "12 min read",
      lastUpdated: "2023-12-20",
      tags: ["Provisional Assessment", "Bond", "Security", "Tax Determination"],
      content: `Provisional assessment allows suppliers to pay tax provisionally when unable to determine exact value or applicable tax rate.

When Required:
• Uncertain goods/services value
• Tax rate determination difficulty
• Complex valuation scenarios
• Time-sensitive supply situations

Application Process:
• Request to Assistant/Deputy Commissioner
• Form GST ASMT-01 submission
• Supporting documents requirement
• Electronic filing on common portal

Officer's Examination:
• Application scrutiny
• Additional information requests (Form GST ASMT-02)
• Supplier's reply submission (Form GST ASMT-03)
• Personal hearing if requested

Assessment Order:
• Form GST ASMT-04 issuance
• Within 90 days of request
• Provisional value/rate determination
• Tax amount specification (including IGST, CGST, SGST, UTGST, cess)

Bond and Security:
• Form GST ASMT-05 bond execution
• Bank guarantee requirement
• Security amount as specified in order
• Cross-jurisdiction bond recognition

Supply Authorization:
• Post-bond execution supply allowed
• Provisional rate/value application
• Tax payment at determined rate
• Normal business operations continuation

Finalization Process:
• Proper assessment after determination
• Final value/rate establishment
• Difference amount calculation
• Adjustment against bond/security

Adjustment Mechanism:
• Excess tax payment refund
• Additional tax recovery from bond
• Interest calculation on differences
• Final clearance procedures

Time Limits:
• Assessment finalization deadlines
• Bond validity periods
• Appeal rights against final assessment
• Limitation periods for adjustments

Benefits:
• Business continuity maintenance
• Compliance under uncertainty
• Risk mitigation
• Cash flow management

Documentation:
• Complete application papers
• Supporting evidence compilation
• Bond and security arrangements
• Final assessment records`
    },
    {
      id: 29,
      title: "Pure Agent Concept in GST",
      description: "Pure agent definition, valuation implications, expenditure exclusion conditions, and invoice requirements for third-party payments.",
      category: "Valuation",
      readTime: "10 min read",
      lastUpdated: "2023-12-18",
      tags: ["Pure Agent", "Valuation", "Third Party", "Expenditure Exclusion"],
      content: `Pure agent concept allows exclusion of third-party expenditures from supply value when agent acts purely on behalf of recipient.

Definition Requirements:
• Contractual agreement with recipient
• Acts as pure agent for expenditure
• No title holding on procured goods/services
• No use for own interest
• Receives actual amount + own service charges

Relevance in GST:
• Value determination impact
• Aggregate turnover implications
• Legacy from Service Tax rules
• Fairness in taxation

Illustration Example:
• Importer (A) and Customs Broker (B)
• Clearance service + transportation arrangement
• Transportation cost reimbursement at actuals
• B acts as pure agent for transportation
• Transportation cost excluded from B's service value

Exclusion Conditions:
• Pure agent criteria satisfaction
• Separate indication in invoice
• Authorization by recipient
• Third-party payment evidence
• Additional to own account services

Invoice Requirements:
• Expenditure separately shown
• Clear identification as reimbursement
• Third-party service details
• Authorization documentation
• Actual amount basis

Valuation Impact:
• Excluded amounts not in supply value
• Reduced aggregate turnover
• GST levy only on margin/service charges
• Input credit implications

Contract Analysis:
• Terms and conditions review
• Agent authority determination
• Title and risk analysis
• Commercial arrangement assessment

Common Scenarios:
• Travel agents booking tickets
• Event organizers hiring venues
• Consultants engaging sub-contractors
• Freight forwarders hiring transporters

Documentation Requirements:
• Service agreements
• Third-party invoices
• Payment vouchers
• Authorization letters
• Reimbursement claims

Compliance Aspects:
• Proper contract structuring
• Invoice format compliance
• Supporting document maintenance
• Audit trail establishment

Restrictions:
• No use for own interest
• Actual amount limitation
• Separate service component
• Proper authorization requirement`
    },
    {
      id: 30,
      title: "Reverse Charge Mechanism (RCM)",
      description: "RCM provisions, notified supplies and recipients, payment procedures, return filing requirements, and compliance obligations.",
      category: "Compliance",
      readTime: "13 min read",
      lastUpdated: "2023-12-15",
      tags: ["RCM", "Reverse Charge", "Notified Supplies", "Cash Payment"],
      content: `Reverse Charge Mechanism (RCM) is where receiver of goods/services pays tax instead of supplier on notified supplies.

Key Features:
• Tax on inward supply receipt
• Notified goods and services only
• Specific recipient categories
• Cash payment mandatory (no ITC offset)

Payment Requirements:
• Essential cash payment for RCM tax
• No input tax credit offset allowed
• Separate from regular output tax payment
• Electronic cash ledger utilization

Supplier Obligations:
• Invoice indication of RCM applicability
• Clear mention of tax payment by recipient
• GSTR-1 return reporting
• No tax collection from recipient

Notified Services under RCM:
• Import of services
• Goods transport agency services
• Advocate services
• Director services to company
• Security services
• Central/State government services
• Residential property renting
• Specified telecommunications services

Notified Goods under RCM:
• Cashew nuts (by agriculturist to registered dealer)
• Bidi wrapper leaves
• Tobacco leaves
• Silk yarn
• Raw cotton
• Cement by unregistered to builder
• Old vehicles from government
• Scrap from Central/State government

Recipient Categories:
• Registered persons under GST
• Specific turnover thresholds
• Business entities
• Government departments and agencies

Return Filing:
• No separate RCM return
• Information in regular returns
• Separate sections for RCM details
• Input credit claims where eligible

Compliance Checklist:
• Identify RCM applicability
• Verify notification coverage
• Ensure cash payment
• Maintain proper records
• File returns accurately

Documentation:
• Supplier invoices with RCM indication
• Payment challans/receipts
• Return filing acknowledgments
• Input credit documentation

Common Mistakes:
• ITC offset against RCM tax
• Missing RCM indication in invoices
• Incorrect return reporting
• Late payment and interest implications

Benefits:
• Simplified tax collection
• Compliance by registered recipients
• Revenue protection
• Sector-specific administration`
    },
    {
      id: 31,
      title: "Registration under GST Law",
      description: "Registration procedures, threshold limits, mandatory registration scenarios, amendment processes, and cancellation provisions.",
      category: "Registration",
      readTime: "20 min read",
      lastUpdated: "2023-12-12",
      tags: ["Registration", "GSTIN", "Threshold", "Amendment", "Cancellation"],
      content: `GST registration provides legal recognition, tax collection authority, and input credit benefits to businesses.

Advantages of Registration:
• Legal recognition as registered supplier
• Authority to collect tax from customers
• Input tax credit claims and utilization
• Seamless credit flow at national level
• Business credibility enhancement

Mandatory Registration Thresholds:
• Goods supply: Rs. 40 lakh annual turnover
• Services supply: Rs. 20 lakh annual turnover
• Special category states may have different limits
• SEZ units/developers: Separate registration mandatory

Compulsory Registration Scenarios:
• Reverse charge basis supply recipients
• Agent supplying on behalf of others
• Input service distributors
• Inter-state supply makers
• E-commerce operators
• Casual taxable persons

GSTIN Structure:
• 15-digit identification number
• First 2 digits: State code
• Next 10 digits: PAN number
• Next 2 digits: Entity code
• Last digit: Check sum number

Registration Process:
• Online application within 30 days
• GSTN common portal submission
• Document upload and verification
• Query resolution if required
• Certificate issuance

Voluntary Registration:
• Below threshold limit suppliers
• Business expansion planning
• Input credit claims
• Customer requirements
• Export business facilitation

Amendment Procedures:
Core Information Changes:
• Legal name alteration
• State/place of business change
• Additional place of business
• 15-day application timeline
• Officer approval within 15 days

Other Changes:
• Functionary details
• Contact information
• Bank account details
• Self-amendment capability
• No officer approval required

Cancellation Scenarios:
Voluntary Cancellation:
• Business discontinuation
• Below threshold operation
• Application within 30 days
• Stock declaration requirement
• Dues clearance mandatory

Suo-motu Cancellation:
• Non-operation from registered premises
• Fake invoice issuance
• Tax evasion activities
• Non-compliance with provisions
• Officer-initiated proceedings

Timeline Compliance:
• Registration application: 30 days
• Amendment application: 15 days
• Cancellation application: 30 days
• Officer processing: Specified timelines
• Appeal rights available

Documentation:
• PAN card mandatory
• Address proofs
• Bank account details
• Business incorporation papers
• Authorized signatory details

Special Registrations:
• Composition dealers
• Input service distributors
• Casual taxable persons
• Non-resident taxable persons
• Online marketplace operators`
    },
    {
      id: 32,
      title: "Zero Rating of Supplies in GST",
      description: "Zero-rated supply provisions, export procedures, SEZ supplies, refund mechanisms, and Bond/LUT options for manufacturers.",
      category: "Export",
      readTime: "18 min read",
      lastUpdated: "2023-12-10",
      tags: ["Zero Rating", "Export", "SEZ", "Refund", "Bond", "LUT"],
      content: `Zero rating ensures entire value chain exemption from tax through output exemption and input credit availability.

Zero Rating Concept:
• Complete value chain tax exemption
• Output supply tax exemption
• Input/input service credit availability
• True zero tax incidence achievement
• Export competitiveness enhancement

Zero Rated Supplies:
• Export of goods or services
• Supply to SEZ developer/unit
• Deemed exports (notified categories)
• Subject to fulfillment of conditions
• Documentation requirements compliance

Export of Goods:
• Physical movement outside India
• Foreign exchange realization
• Shipping bill endorsement
• Customs clearance completion
• Export documentation maintenance

Export of Services:
• Service provision to overseas recipients
• Foreign exchange realization
• Place of supply outside India
• Documentation as per guidelines
• Banking compliance requirements

SEZ Supplies:
• Special Economic Zone developer supplies
• SEZ unit supplies
• Treated as inter-state supplies
• IGST levy subject to refund
• Zero-rating benefits available

Refund Options:
Option 1 - Bond/LUT Route:
• Supply without IGST payment
• Bond or Letter of Undertaking execution
• Unutilized input credit refund
• Prescribed conditions compliance
• Safeguards and procedures adherence

Option 2 - Payment Route:
• Supply with IGST payment
• Tax refund as per Section 54
• Prescribed procedure compliance
• Documentation requirements fulfillment
• Time limit adherence

Bond/LUT Mechanism:
• Financial security for compliance
• Conditions and safeguards specification
• Performance guarantee provision
• Violation penalty implications
• Renewal and review procedures

Refund Process:
• Application submission
• Document verification
• Officer examination
• Provisional/final refund
• Appeal rights availability

Input Service Credit:
• Zero-rated supply input services
• Credit availability despite exemption
• Refund eligibility maintenance
• Proportionate calculation methods
• Common input handling

Time Limits:
• Refund application deadlines
• Export realization periods
• Documentation submission timelines
• Officer processing schedules
• Appeal filing limitations

Documentation Requirements:
• Export shipping bills
• Foreign exchange realization certificates
• Tax payment challans
• Input credit statements
• Bond/LUT execution papers

Compliance Obligations:
• Export obligation fulfillment
• Foreign exchange realization
• Prescribed return filing
• Record maintenance requirements
• Audit and verification cooperation`
    }
  ];

  const categories = ["All", "Fundamentals", "Compliance", "Legal", "Registration", "Taxation", "Classification", "Documentation", "Overview", "Export", "Import", "Credit", "Services", "Manufacturing", "Valuation", "Assessment"];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <BookOpen className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
            GST Knowledge Pool
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive collection of GST documents, guides, and resources to help you navigate the complexities of Goods and Services Tax with confidence.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search documents, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3"
              />
            </div>
            <div className="md:w-64">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="py-3">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredDocuments.length} of {documents.length} documents
          </div>
        </div>

        {/* Document Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDocuments.map((doc, index) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 transform hover:-translate-y-2 hover:scale-105"
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-red-50 text-red-700 border-red-200"
                  >
                    {doc.category}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => generatePDF(doc)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>

                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {doc.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {doc.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {doc.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {doc.lastUpdated}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {doc.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                  {doc.tags.length > 3 && (
                    <span className="text-xs text-gray-500">+{doc.tags.length - 3} more</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => generatePDF(doc)}
                    className="flex-1"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No documents found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filter criteria.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold font-heading mb-4">
              Need Expert GST Consultation?
            </h2>
            <p className="text-red-100 mb-6 text-lg">
              Our team of experienced professionals is ready to help you with personalized GST guidance and compliance solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Get Professional Help
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}