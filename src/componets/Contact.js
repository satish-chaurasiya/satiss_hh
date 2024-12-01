import { Typography, Link, Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <div className="contact-body">
        <Box sx={{ textAlign: "center", padding: "20px" }}>
      <h1>Contact Me</h1>
      <Typography variant="body1" gutterBottom>
        Feel free to reach out to me through any of the following channels:
      </Typography>
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box component="li" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PhoneIcon color="primary" />
          <Link href="tel:+91 8657229886" underline="hover" color="inherit">
            +91 8657229886
          </Link>
        </Box>
        <Box component="li" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <EmailIcon color="primary" />
          <Link href="mailto:chaurasiyasatish717@gmail.com" underline="hover" color="inherit">
            chaurasiyasatish717@gmail.com
          </Link>
        </Box>
        <Box component="li" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <GitHubIcon color="primary" />
          <Link
            href="https://github.com/satish-chaurasiya"
            underline="hover"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </Box>
        <Box component="li" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LinkedInIcon color="primary" />
          <Link
            href="https://www.linkedin.com/in/satish-chaurasiya-9b1645204/"
            underline="hover"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </Box>
      </Box>
    </Box>
    </div>
  );
}

export default Contact;