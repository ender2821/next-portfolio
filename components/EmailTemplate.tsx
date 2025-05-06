import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Section,
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

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
  marginTop: "20px",
  maxWidth: "360px",
  margin: "0 auto",
  padding: "68px 0 130px",
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

const code = {
  color: "#000",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Bold",
  fontSize: "32px",
  fontWeight: 700,
  letterSpacing: "6px",
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "0 auto",
  width: "100%",
  textAlign: "center" as const,
};

const paragraph = {
  color: "#444",
  fontSize: "15px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  letterSpacing: "0",
  lineHeight: "23px",
  padding: "0 40px",
  margin: "0",
  textAlign: "center" as const,
};

const link = {
  color: "#444",
  textDecoration: "underline",
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
        <Container style={container}>
          <Img
            src={`${baseUrl}/static/plaid-logo.png`}
            width="212"
            height="88"
            alt="Plaid"
            style={logo}
          />
          <Text style={tertiary}>Verify Your Identity</Text>
          <Heading style={secondary}>
            Enter the following code to finish linking Venmo.
          </Heading>
          <Section style={codeContainer}>
            <Text style={code}></Text>
          </Section>
          <Text style={paragraph}>Not expecting this email?</Text>
          <Text style={paragraph}>
            Contact{" "}
            <Link href="mailto:login@plaid.com" style={link}>
              login@plaid.com
            </Link>{" "}
            if you did not request this code.
          </Text>
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
  projectInMind: false,
  subject: "Subject",
  message: "Message",
  projectType: "Web Design",
  estimatedBudget: "Less than $1000",
  projectDescription: "Project Description",
} as FormData;
