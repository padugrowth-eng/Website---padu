/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const name = e.record.get("name");
  const company = e.record.get("company") || "Not provided";
  const phone = e.record.get("phone") || "Not provided";
  const message = e.record.get("message");
  const created = e.record.get("created");
  
  // Format the timestamp as readable date/time
  const submissionDate = new Date(created).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });
  
  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Sender Name:</strong> ${name}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
    <p><strong>Submitted at:</strong> ${submissionDate}</p>
  `;
  
  const message_obj = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "halo@padu.id" }],
    subject: "New Contact Form Submission from " + name,
    html: htmlContent
  });
  
  $app.newMailClient().send(message_obj);
  e.next();
}, "contact_submissions");