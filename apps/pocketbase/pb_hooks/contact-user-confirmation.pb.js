/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const userEmail = e.record.get("email");
  const userName = e.record.get("name");
  
  const htmlContent = `
    <h2>We Received Your Message</h2>
    <p>Hi ${userName},</p>
    <p>Thank you for reaching out to PADU Growth! We appreciate you taking the time to contact us.</p>
    <p>We have successfully received your message and will review it shortly. Our team will get back to you as soon as possible.</p>
    <p>If you have any urgent matters, feel free to reach out directly at <strong>halo@padu.id</strong></p>
    <p>Best regards,<br>PADU Growth Team</p>
  `;
  
  const message_obj = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: userEmail }],
    subject: "We Received Your Message - PADU Growth",
    html: htmlContent
  });
  
  $app.newMailClient().send(message_obj);
  e.next();
}, "contact_submissions");