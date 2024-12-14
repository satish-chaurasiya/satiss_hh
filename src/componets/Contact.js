import React from "react";
import { Box, Link, Typography, Container, Paper } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <div className="home">
      <div className="hero">
      <div className="contact-page">
      <Container sx={{ py: 5 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
        <h3>
            Get In Touch
          </h3>
          <h4>
            Feel free to contact me through any of the channels below. I'll get back to you as soon as possible!
            </h4>
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: "flex-start",
            }}
          >
            {/* Phone */}
            <Box component="li" sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <PhoneIcon color="primary" />
              <Link href="tel:+91 8657229886" underline="hover" color="inherit" variant="body1">
               <h5>+91 8657229886</h5>
              </Link>
            </Box>

            {/* Email */}
            <Box component="li" sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <EmailIcon color="primary" />
              <Link href="mailto:chaurasiyasatish717@gmail.com" underline="hover" color="inherit" variant="body1">
              <h5>chaurasiyasatish717@gmail.com</h5>
              </Link>
            </Box>

            {/* GitHub */}
            <Box component="li" sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <GitHubIcon color="primary" />
              <Link
                href="https://github.com/satish-chaurasiya"
                underline="hover"
                color="inherit"
                variant="body1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5>GitHub</h5>
              </Link>
            </Box>

            {/* LinkedIn */}
            <Box component="li" sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <LinkedInIcon color="primary" />
              <Link
                href="https://www.linkedin.com/in/satish-chaurasiya-9b1645204/"
                underline="hover"
                color="inherit"
                variant="body1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5>LinkedIn</h5>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
      </div>
    </div>
  );
}
