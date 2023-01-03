# LifeQuest-Website


# dbmate setup for Windows
For data migrations

**Step 1:** On PowerShell, run ```Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux```\
**Step 2:** Restart your PC.\
**Step 3:** Open Microsoft Store and search for WSL  \
**Step 4:** Choose Ubuntu 20.04 LTS and install. **Note:** *You'll be required to provide UNIX username and password* \
**Step 5:** On PowerShell console, check if successful by running ```wsl -l -v``` \
**Step 6:** Run ```wsl``` \
**Step 7:** Run ```sudo curl -fsSL -o /usr/local/bin/dbmate https://github.com/amacneil/dbmate/releases/latest/download/dbmate-linux-amd64``` \
**Step 8:** Run ```sudo chmod +x /usr/local/bin/dbmate```
