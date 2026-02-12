cask "pdfova" do
  version "0.2.1"
  sha256 :no_check # Github Actions tamamlandığında gerçek SHA ile güncellenmeli

  url "https://github.com/tamert/pdfova/releases/download/v#{version}/Pdfova_#{version}_aarch64.dmg"
  name "Pdfova"
  desc "All-in-one PDF and Image utility tool"
  homepage "https://github.com/tamert/pdfova"

  app "Pdfova.app"

  zap trash: [
    "~/Library/Application Support/com.tamert.pdfova",
    "~/Library/Preferences/com.tamert.pdfova.plist",
    "~/Library/Saved Application State/com.tamert.pdfova.savedState",
  ]
end
