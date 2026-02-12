# Flatpak Build & Installation Guide

This guide explains how to build and install **Pdfova** as a Flatpak on Linux (Pardus, Debian, Ubuntu, etc.).

## 1. Prerequisites

You need to have `flatpak` and `flatpak-builder` installed on your system.

### For Pardus / Debian / Ubuntu:
```bash
sudo apt update
sudo apt install flatpak flatpak-builder
```

### Install required SDKs and Runtimes:
```bash
flatpak remote-add --user --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install --user flathub org.freedesktop.Platform//24.08 org.freedesktop.Sdk//24.08
flatpak install --user flathub org.freedesktop.Sdk.Extension.rust-stable//24.08 org.freedesktop.Sdk.Extension.node20//24.08
```

## 2. Build the Application

Navigate to this directory and run the following command. The `--share=network` flag is **REQUIRED** because the build process needs to download dependencies from NPM and Cargo.

```bash
flatpak-builder --user --install --force-clean --share=network build-dir com.tamert.pdfova.yaml
```

## 3. Run the Application

Once installed, you can launch Pdfova via your application menu or the terminal:

```bash
flatpak run com.tamert.pdfova
```

## 4. Troubleshooting

### Permission Issues
If the app cannot access your files, you can grant extra permissions using Flatseal or via terminal:
```bash
flatpak override com.tamert.pdfova --filesystem=home
```

### Build Failures
If the build fails due to network issues, ensure you have a stable internet connection and try running the build command again. `flatpak-builder` will cache successful steps.
