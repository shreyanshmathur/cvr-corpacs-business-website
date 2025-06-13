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