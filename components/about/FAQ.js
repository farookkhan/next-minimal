import { Accordion, Icon } from 'semantic-ui-react';

const faqHeaderStyle = {
  fontWeight: 300,
  fontSize: 30,
  paddingTop: 50,
  marginbottom: 50,
};

const faqSectionStyle = {
  fontWeight: 300,
  fontSize: 22,
  paddingTop: 32,
  marginbottom: 32,
};

const FAQ = (props) => {
  const {
    faqs = [],
  } = props;

  const renderFaqs = (faqList) => {
    return faqList.map((faq) => {
      return (
        <Accordion fluid styled id={`faq-${faq.id}`}>
          <Accordion.Title>
            <Icon name="dropdown" />
            {faq.question}
          </Accordion.Title>
          <Accordion.Content>
            {faq.answer}
          </Accordion.Content>
        </Accordion>
      );
    });
  };

  const faqSections = faqs.map((faqSection) => {
    return (
      <div key={`faq-section-${faqSection.sectionTitle}`}>
        <h1 style={faqSectionStyle}>
          {faqSection.sectionTitle}
        </h1>
        {renderFaqs(faqSection.faqs)}
      </div>
    );
  });

  return (
    <div>
      <h1 style={faqHeaderStyle}>FAQs</h1>
      {faqSections}
    </div>
  );
};

export default FAQ;
