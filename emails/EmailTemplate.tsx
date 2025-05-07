import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Text,
} from "@react-email/components";
import { FormData } from "@/components/ContactForm";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const header = {
  backgroundColor: "#131210",
  padding: "16px",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
  marginTop: "20px",
  margin: "0 auto",
  padding: "32px",
};

const logo = {
  margin: "0 auto",
};

const tertiary = {
  color: "#0a85ea",
  fontSize: "11px",
  fontWeight: 700,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  height: "16px",
  letterSpacing: "0",
  lineHeight: "16px",
  margin: "16px 8px 8px 8px",
  textTransform: "uppercase" as const,
  textAlign: "center" as const,
};

const primary = {
  color: "#fff",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "32px",
  fontWeight: 700,
  lineHeight: "nomral",
  marginBottom: "0",
  marginTop: "0",
  marginLeft: "16px",
};

const secondary = {
  color: "#000",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "24px",
  marginBottom: "0",
  marginTop: "0",
  textAlign: "center" as const,
};

const codeContainer = {
  background: "rgba(0,0,0,.05)",
  borderRadius: "4px",
  margin: "16px auto 14px",
  verticalAlign: "middle",
  width: "280px",
};

const paragraph = {
  color: "#444",
  fontSize: "15px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  letterSpacing: "0",
  lineHeight: "23px",
  margin: "0",
};

export default function EmailTemplate({
  name,
  company,
  email,
  phone,
  projectInMind,
  subject,
  message,
  projectType,
  estimatedBudget,
  projectDescription,
}: FormData) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={header}>
          <Row>
            <Column>
              <Img
                // src={`${baseUrl}/joshJensenCreativeLogo.svg`}
                src={`http://localhost:3001/joshJensenCreativeLogo.svg`}
                width="50"
                height="50"
                alt="Josh Jensen Creative"
                style={logo}
              />
            </Column>
            <Column>
              <Text style={primary}>JOSH JENSEN CREATIVE</Text>
            </Column>
          </Row>
        </Container>
        <Container style={container}>
          {projectInMind ? (
            <>
              <Preview>New Project Request from {email}</Preview>
              <Heading style={secondary}>New Project Request</Heading>
              <Hr />
              <Text style={paragraph}>
                From: <b>{name}</b>
              </Text>
              {company && (
                <Text style={paragraph}>
                  Company: <b>{company}</b>
                </Text>
              )}
              {phone && (
                <Text style={paragraph}>
                  Phone: <b>{phone}</b>
                </Text>
              )}
              <Text style={paragraph}>
                Email: <b>{email}</b>
              </Text>
              <Hr />
              <Text style={paragraph}>
                Project Type: <b>{projectType}</b>
              </Text>
              <Text style={paragraph}>
                Estimated Budget: <b>{estimatedBudget}</b>
              </Text>
              <Text style={paragraph}>{projectDescription}</Text>
            </>
          ) : (
            <>
              <Preview>Contact Request from {email}</Preview>
              <Heading style={secondary}>{subject}</Heading>
              <Hr />
              <Text style={paragraph}>
                From: <b>{name}</b>
              </Text>
              {company && (
                <Text style={paragraph}>
                  Company: <b>{company}</b>
                </Text>
              )}
              {phone && (
                <Text style={paragraph}>
                  Phone: <b>{phone}</b>
                </Text>
              )}
              <Text style={paragraph}>
                Email: <b>{email}</b>
              </Text>
              <Hr />
              <Text style={paragraph}>{message}</Text>
            </>
          )}
        </Container>
      </Body>
    </Html>
  );
}

EmailTemplate.PreviewProps = {
  name: "Joshua Jensen",
  company: "JoshJensenCreative LLC",
  email: "ender2821@yahoo.com",
  phone: "123-456-7890",
  projectInMind: true,
  subject: "Website Redesign Inquiry—Available for Work?",
  message:
    "I hope you're doing well! I'm reaching out because I'm looking for a skilled web developer to help with [brief description of project—e.g., a new website, a redesign, or specific functionality]. I’d love to learn more about your experience and see if we’d be a good fit to work together. Could we set up a time to discuss details? Please let me know your availability. Looking forward to your response!",
  projectType: "Web Design",
  estimatedBudget: "Less than $1000",
  projectDescription: "Project Description",
} as FormData;
