import jsPDF from 'jspdf';
import { applyPlugin } from 'jspdf-autotable';

// Apply the autoTable plugin to jsPDF (required for jspdf-autotable v5+)
applyPlugin(jsPDF);

export const generateInvoice = (order, userData = {}, action = 'download') => {
  // Create PDF in landscape orientation
  const doc = new jsPDF('landscape', 'mm', 'a4');
  
  // Get page dimensions for responsive layout
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2);
  
  // Company Information
  const companyInfo = {
    name: "Ray's Healthy Living",
    address: "70 Solomons Island Rd S",
    city: "Prince Frederick, MD 20678",
    phone: "443-432-5295",
    email: "rayshealthyliving@gmail.com"
  };

  // Set fonts and colors
  doc.setFont('helvetica');
  
  // Header - Company Logo/Name (optimized for landscape)
  doc.setFontSize(Math.min(22, contentWidth / 12));
  doc.setTextColor(40, 116, 166);
  doc.text(companyInfo.name, margin, 20);
  
  // Invoice Title (optimized for landscape)
  doc.setFontSize(Math.min(18, contentWidth / 15));
  doc.setTextColor(0, 0, 0);
  doc.text('INVOICE', pageWidth - margin - 35, 20);
  
  // Company Details (optimized spacing)
  doc.setFontSize(Math.min(9, contentWidth / 25));
  doc.setTextColor(100, 100, 100);
  doc.text(companyInfo.address, margin, 28);
  doc.text(companyInfo.city, margin, 35);
  doc.text(`Phone: ${companyInfo.phone}`, margin, 42);
  doc.text(`Email: ${companyInfo.email}`, margin, 49);
  
  // Invoice Details (optimized for landscape)
  doc.setFontSize(Math.min(10, contentWidth / 20));
  doc.setTextColor(0, 0, 0);
  const invoiceNumber = order.paymentIntentId || `INV-${order._id.slice(-8).toUpperCase()}`;
  const invoiceDate = new Date(order.createdAt).toLocaleDateString();
  
  const invoiceDetailsX = pageWidth - margin - 70;
  doc.text(`Invoice: ${invoiceNumber}`, invoiceDetailsX, 30);
  doc.text(`Date: ${invoiceDate}`, invoiceDetailsX, 40);
  
  // Bill To Section (optimized spacing)
  doc.setFontSize(Math.min(12, contentWidth / 18));
  doc.setTextColor(40, 116, 166);
  doc.text('BILL TO:', margin, 60);
  
  // Ship To Section (optimized positioning)
  const shipToX = Math.max(pageWidth / 2 + 20, margin + 120);
  doc.text('SHIP TO:', shipToX, 60);
  
  doc.setFontSize(Math.min(10, contentWidth / 20));
  doc.setTextColor(0, 0, 0);
  let billToY = 70;
  let shipToY = 70;
  
  if (order.address && !order.address.message) {
    // Bill To section
    doc.text(order.address.name || 'Customer', margin, billToY);
    billToY += 7;
    doc.text(order.address.addressLine1, margin, billToY);
    billToY += 7;
    if (order.address.addressLine2) {
      doc.text(order.address.addressLine2, margin, billToY);
      billToY += 7;
    }
    doc.text(`${order.address.city}, ${order.address.state} ${order.address.zipcode}`, margin, billToY);
    billToY += 7;
    doc.text(order.address.country, margin, billToY);
    billToY += 7;
    doc.text(`Phone: ${order.address.contactNumber}`, margin, billToY);
    if (order.address.email) {
      billToY += 7;
      doc.text(`Email: ${order.address.email}`, margin, billToY);
    }
    
    // Ship To section (same as bill to)
    doc.text(order.address.name || 'Customer', shipToX, shipToY);
    shipToY += 7;
    doc.text(order.address.addressLine1, shipToX, shipToY);
    shipToY += 7;
    if (order.address.addressLine2) {
      doc.text(order.address.addressLine2, shipToX, shipToY);
      shipToY += 7;
    }
    doc.text(`${order.address.city}, ${order.address.state} ${order.address.zipcode}`, shipToX, shipToY);
    shipToY += 7;
    doc.text(order.address.country, shipToX, shipToY);
  } else {
    // Bill To section with user data
    doc.text(userData.name || 'Customer', margin, billToY);
    billToY += 7;
    doc.text(userData.email || '', margin, billToY);
    billToY += 7;
    doc.text(userData.phone || '', margin, billToY);
    
    // Ship To section
    doc.text('Same as billing address', shipToX, shipToY);
  }
  
  // Items Table - optimized for landscape layout
  const tableStartY = Math.max(billToY, shipToY) + 15;
  
  // Prepare table data with proper formatting (avoid currency symbol issues)
  const tableData = order.items.map((item, index) => [
    (index + 1).toString(),
    item.product?.name || 'Product',
    item.quantity.toString(),
    `$${(item.price || 0).toFixed(2)}`,
    `$${((item.price || 0) * item.quantity).toFixed(2)}`
  ]);
  
  // Optimized table column widths for landscape - better distribution
  const tableColumnWidths = {
    0: Math.max(18, contentWidth * 0.05),  // # - Smaller
    1: Math.max(120, contentWidth * 0.57), // Description - More space
    2: Math.max(20, contentWidth * 0.08),  // Qty - Smaller
    3: Math.max(30, contentWidth * 0.15),  // Unit Price - Optimized
    4: Math.max(30, contentWidth * 0.15)   // Amount - Optimized
  };
  
  doc.autoTable({
    startY: tableStartY,
    head: [['#', 'Description', 'Qty', 'Unit Price', 'Amount']],
    body: tableData,
    theme: 'plain',
    margin: { left: margin, right: margin },
    headStyles: {
      fillColor: [40, 116, 166],
      textColor: 255,
      fontSize: 10,
      fontStyle: 'bold',
      halign: 'center',
      cellPadding: 3
    },
    bodyStyles: {
      fontSize: 9,
      cellPadding: 3,
      lineColor: [255, 255, 255], // Make lines invisible (white)
      lineWidth: 0 // Remove line width
    },
    alternateRowStyles: {
      fillColor: [250, 250, 250]
    },
    columnStyles: {
      0: { cellWidth: tableColumnWidths[0], halign: 'center', fontStyle: 'bold' },
      1: { 
        cellWidth: tableColumnWidths[1], 
        halign: 'left',
        cellPadding: { left: 4, right: 2, top: 3, bottom: 3 }
      },
      2: { cellWidth: tableColumnWidths[2], halign: 'center', fontStyle: 'bold' },
      3: { cellWidth: tableColumnWidths[3], halign: 'right' },
      4: { cellWidth: tableColumnWidths[4], halign: 'right', fontStyle: 'bold' }
    },
    styles: {
      overflow: 'linebreak',
      cellWidth: 'wrap',
      halign: 'left',
      lineColor: [255, 255, 255], // Remove all borders
      lineWidth: 0
    },
    tableLineColor: [255, 255, 255], // Remove table outline
    tableLineWidth: 0
  });
  
  // Calculate totals
  const subtotal = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = order.tax || 0;
  const shipping = order.shippingCost || 0;
  const total = order.total || subtotal + tax + shipping;
  
  // Simple totals section without boxes for better fit
  const finalY = doc.lastAutoTable.finalY + 15;
  const totalsX = pageWidth - margin - 80;
  const valuesX = pageWidth - margin - 5;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  
  doc.text('Subtotal:', totalsX, finalY);
  doc.text(`$${subtotal.toFixed(2)}`, valuesX, finalY, { align: 'right' });
  
  let currentY = finalY + 8;
  if (tax > 0) {
    doc.text('Tax:', totalsX, currentY);
    doc.text(`$${tax.toFixed(2)}`, valuesX, currentY, { align: 'right' });
    currentY += 8;
  }
  
  if (shipping > 0) {
    doc.text('Shipping:', totalsX, currentY);
    doc.text(`$${shipping.toFixed(2)}`, valuesX, currentY, { align: 'right' });
    currentY += 8;
  }
  
  // Total line with simple separator
  doc.setLineWidth(0.5);
  doc.setDrawColor(0, 0, 0);
  doc.line(totalsX, currentY + 2, valuesX, currentY + 2);
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('Total:', totalsX, currentY + 10);
  doc.text(`$${total.toFixed(2)}`, valuesX, currentY + 10, { align: 'right' });
  
  // Payment Information in simple layout
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  const paymentY = currentY + 25;
  
  doc.text('Payment Information:', margin, paymentY);
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text(`Method: ${order.paymentMethod || 'Online Payment'}`, margin, paymentY + 8);
  doc.text(`Status: ${order.status === 'completed' ? 'Paid' : 'Pending'}`, margin, paymentY + 16);
  doc.text(`Order Status: ${order.status ? order.status.charAt(0).toUpperCase() + order.status.slice(1) : 'Processing'}`, margin, paymentY + 24);
  
  // Simple footer section for better fit
  const footerY = paymentY + 35;
  
  doc.setFontSize(9);
  doc.setTextColor(40, 116, 166);
  doc.setFont('helvetica', 'bold');
  doc.text('Thank you for your business!', margin, footerY);
  
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.setFont('helvetica', 'normal');
  doc.text('For any queries, please contact us at rayshealthyliving@gmail.com', margin, footerY + 8);
  
  // Simple terms in one line
  const termsY = footerY + 20;
  doc.setFontSize(7);
  doc.setTextColor(60, 60, 60);
  doc.text('Terms: Payment due within 30 days | Include invoice number on payment | All sales are final unless specified', margin, termsY);
  
  // Generate PDF based on action
  if (action === 'download') {
    doc.save(`Invoice-${invoiceNumber}.pdf`);
  } else if (action === 'view') {
    // Open in new tab for preview
    const pdfDataUri = doc.output('datauristring');
    const newWindow = window.open();
    newWindow.document.write(`
      <iframe 
        width='100%' 
        height='100%' 
        src='${pdfDataUri}'
        style='border: none;'>
      </iframe>
    `);
  }
  
  return doc;
};

export const previewInvoice = (order, userData = {}) => {
  return generateInvoice(order, userData, 'view');
};

export const downloadInvoice = (order, userData = {}) => {
  return generateInvoice(order, userData, 'download');
};
