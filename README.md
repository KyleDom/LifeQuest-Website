# LifeQuest-Website

**The purpose of the online blood donation management system is to create an online communication between the organization and the blood donors. Anyone or any organization that wants to donate blood for a good cause or needs blood can register through this website. If necessary, the admin authority may add, delete and modify. The Online Blood Donation Management System project's goal is to create an online database of blood donation information. The distributed client-server computing technology has been taken into consideration throughout the entire project's development.**

## Tech Stack 
Language used: **TYPESCRIPT**\
Front end: **React and Express JS (deploy)**\
Backend: **TS - Node js**\
Database: **MySql**

# dbmate setup for Windows

**Step 1:** On PowerShell, run ```Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux```\
**Step 2:** Restart your PC.\
**Step 3:** Open Microsoft Store and search for WSL  \
**Step 4:** Choose Ubuntu 20.04 LTS and install. **Note:** *You'll be required to provide UNIX username and password* \
**Step 5:** On PowerShell console, check if successful by running ```wsl -l -v``` \
**Step 6:** Run ```wsl``` \
**Step 7:** Run ```sudo curl -fsSL -o /usr/local/bin/dbmate https://github.com/amacneil/dbmate/releases/latest/download/dbmate-linux-amd64``` \
**Step 8:** Run ```sudo chmod +x /usr/local/bin/dbmate```
