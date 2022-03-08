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
          width: "70%",
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              color: "#0041AD",
              textTransform: "uppercase",
              letterSpacing: ".8rem",
            }}
          >
            About Me
          </Typography>
          <Typography
            sx={{
              width: "100%",
              fontSize: "1.5rem",
            }}
          >
            I'm a computer engineer and decided to learn front-end development
            because of my interest in web design and developement, i want to be
            able get involve in major major web development projects and be a
            part of a professional front-end dev team.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              color: "#0041AD",
              textTransform: "uppercase",
              letterSpacing: ".8rem",
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
                  fontSize: "2rem",
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
                      fontSize: "1.3rem",
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
                      fontSize: "1.3rem",
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
                      fontSize: "1.3rem",
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
                      fontSize: "1.3rem",
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
                      fontSize: "1.3rem",
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
                      fontSize: "1.3rem",
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
                  fontSize: "2rem",
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
                      fontSize: "1.3rem",
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
                      fontSize: "1.3rem",
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
                      fontSize: "1.3rem",
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
                      fontSize: "1.3rem",
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
                  fontSize: "2rem",
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
                      fontSize: "1.3rem",
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
                      fontSize: "1.3rem",
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
            gap: "2rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              color: "#0041AD",
              textTransform: "uppercase",
              letterSpacing: ".8rem",
            }}
          >
            Interships and Bootcamps
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "1.3rem",
            }}
          >
            <Box>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Daneshkar ReactJS Bootcamp
              </Typography>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
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
                      fontSize: "1.3rem",
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
                      fontSize: "1.3rem",
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
                      fontSize: "1.3rem",
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
            gap: "2rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              color: "#0041AD",
              textTransform: "uppercase",
              letterSpacing: ".8rem",
            }}
          >
            Education
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "1.3rem",
            }}
          >
            <Box>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                University of Isfahan
              </Typography>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
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
                      fontSize: "1.3rem",
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
                      fontSize: "1.3rem",
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
                      fontSize: "1.3rem",
                    }}
                  >
                    2017-2022
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
            gap: "2rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              color: "#0041AD",
              textTransform: "uppercase",
              letterSpacing: ".8rem",
            }}
          >
            Personal Life
          </Typography>
          <Typography
            sx={{
              width: "100%",
              fontSize: "1.3rem",
            }}
          >
            I like writing, though i'm not very good at it, i also make simple
            video games as a hobbie, mostly 2D games and web-browser games. For
            pastime i play games and watch movies and TV shows. Occasionally, i
            read books. I also workout and walk around as exercise. I'm also a
            PC Building enthusiast and have a lot of knowledge about different
            PC parts.
          </Typography>
        </Box>
      </Box>
    )
}

export default MainContent