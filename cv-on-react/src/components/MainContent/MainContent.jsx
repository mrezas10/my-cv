import { Box, Typography, List, ListItem } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function MainContent() {
  return (
    <Box
      sx={{
        background: "rgb(180,224,255)",
        background:
          "linear-gradient(228deg, rgba(180,224,255,1) 0%, rgba(255,255,255,1) 52%)",
        boxSizing: "border-box",
        padding: "2rem",
        width: "65%",
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "4rem",
            color: "#0041AD",
            textTransform: "uppercase",
            letterSpacing: "1rem",
          }}
        >
          About Me
        </Typography>
        <Typography
          sx={{
            width: "100%",
            fontSize: "2rem",
          }}
        >
          I'm a computer engineer and decided to learn front-end development
          because of my interest in web design and developement, i want to be
          able to get involve in major web development projects and be a part of
          a professional front-end dev team.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "4rem",
            color: "#0041AD",
            textTransform: "uppercase",
            letterSpacing: "1rem",
          }}
        >
          skills
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            fontSize: "1.3rem",
          }}
        >
          <Box
            sx={{
              width: "33%",
            }}
          >
            <Typography
              sx={{
                fontSize: "2.4rem",
                fontWeight: "bold",
              }}
            >
              Front-End
            </Typography>
            <List
              sx={{
                marginLeft: "2rem",
              }}
            >
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <HtmlIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  HTML
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <CssIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  CSS
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <JavascriptIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  Javascript
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <CodeIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  React
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <CodeIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  Next
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <CodeIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  MaterialUI
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              width: "33%",
            }}
          >
            <Typography
              sx={{
                fontSize: "2.4rem",
                fontWeight: "bold",
              }}
            >
              Programming
            </Typography>
            <List
              sx={{
                marginLeft: "2rem",
              }}
            >
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <CodeIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  C++
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <CodeIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  C#
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <JavascriptIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  Javascript
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <CodeIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  Java
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              width: "33%",
            }}
          >
            <Typography
              sx={{
                fontSize: "2.4rem",
                fontWeight: "bold",
              }}
            >
              Project Management
            </Typography>
            <List
              sx={{
                marginLeft: "2rem",
              }}
            >
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <GitHubIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  Git
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <WorkspacesIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  Trello
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "4rem",
            color: "#0041AD",
            textTransform: "uppercase",
            letterSpacing: "1rem",
          }}
        >
          Education
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1.3rem",
          }}
        >
          <Box>
            <Typography
              sx={{
                textTransform: "uppercase",
                letterSpacing: ".8rem",
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Official
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "2.4rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              University of Isfahan
            </Typography>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <SchoolIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  Computer Engineering
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <LocationOnIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  Isfahan, Iran
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <AccessTimeIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  2017-2022
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography
              sx={{
                textTransform: "uppercase",
                letterSpacing: ".8rem",
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Bootcamps
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "2.4rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Daneshkar ReactJS Bootcamp
            </Typography>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <SchoolIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  HTML, CSS, JS , React
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <LocationOnIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  Online
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "inline-flex",
                  gap: "1rem",
                }}
              >
                <AccessTimeIcon />
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                  }}
                >
                  2021-2022
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "4rem",
            color: "#0041AD",
            textTransform: "uppercase",
            letterSpacing: "1rem",
          }}
        >
          Personal Life
        </Typography>
        <Typography
          sx={{
            width: "100%",
            fontSize: "2rem",
          }}
        >
          I like writing, though i'm not very good at it, i also make simple
          video games as a hobbie, mostly 2D games and web-browser games. For
          pastime i play games and watch movies and TV shows. Occasionally, i
          read books. I also workout and walk around as exercise. I'm also a PC
          Building enthusiast and have a lot of knowledge about different PC
          parts.
        </Typography>
      </Box>
    </Box>
  );
}

export default MainContent;
