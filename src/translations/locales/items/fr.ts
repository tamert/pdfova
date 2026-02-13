import { en } from "../en";

export const fr: typeof en = {
    ...en,
    welcome: "Bonjour,",
    efficiencyText: "L'efficacité n'est qu'à une goutte de distance",
    dropZoneTitle: "Déposez vos fichiers ici",
    dropZoneSub: "Supporte PDF, images, Word & plus",
    dashboard: "Panneau",
    history: "Historique",
    settings: "Paramètres",
    help: "Aide",
    about: "À propos",
    version: "Version",
    releaseNotes: "Notes de version",
    outputDir: "Dossier de sortie",
    selectFolder: "Choisir un dossier",
    noFolder: "Aucun dossier sélectionné",
    processing: "Traitement...",
    selectFolderFirst: "Veuillez d'abord sélectionner le dossier de sortie !",
    comingSoon: "Bientôt disponible",
    categories: { all: "Tout", pdf: "PDF", word: "Word", image: "Image", ocr: "OCR" },
    tools: {
        compress: { name: "Compresser PDF", desc: "Réduire la taille sans perdre en qualité" },
        word: { name: "PDF en Texte", desc: "Extraire le texte vers un fichier lisible" },
        signature: { name: "Extraire Signature", desc: "Isoler les images de signature des PDF" },
        resize: { name: "Redimensionner", desc: "Optimiser des centaines d'images à la fois" },
        ocr: { name: "Outil OCR", desc: "Extraire le contenu textuel de vos documents" },
        merge: { name: "Fusionner PDF", desc: "Combiner plusieurs fichiers PDF en un seul" },
        split: { name: "Diviser PDF", desc: "Séparer les pages ou extraire des parties spécifiques" },
        imageToPdf: { name: "Images en PDF", desc: "Convertir et combiner des images en document" }
    },
    mergeUI: {
        addItems: "Ajouter des fichiers", clearList: "Effacer la liste", startMerge: "Fusionner",
        mergeTitle: "Liste de fusion PDF", noFiles: "Aucun fichier ajouté", orderHint: "Utilisez les boutons pour réordonner"
    },
    resizeUI: {
        title: "Redimensionnement par lot", addImages: "Ajouter des images", clearList: "Effacer",
        startResize: "Redimensionner", noFiles: "Aucune image ajoutée", modeExact: "Taille exacte",
        modePercent: "Pourcentage", modeWidth: "Par largeur", modeHeight: "Par hauteur",
        widthLabel: "Largeur (px)", heightLabel: "Hauteur (px)", percentLabel: "Échelle (%)",
        widthHint: "Hauteur calculée automatiquement", heightHint: "Largeur calculée automatiquement"
    },
    splitUI: {
        title: "Diviser PDF", selectFile: "Choisir un PDF", startSplit: "Diviser",
        modeExtract: "Extraire la sélection", modeSplitAll: "Diviser toutes les pages",
        pagesFound: "Pages trouvées", noFile: "Aucun fichier sélectionné", hint: "Cliquez sur les pages pour sélectionner"
    },
    imageToPdfUI: {
        title: "Images en PDF", addImages: "Ajouter des images", createPdf: "Créer PDF", clear: "Tout effacer",
        placeholder: "Ajoutez des images pour les convertir en document PDF"
    }
};
