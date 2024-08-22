export function DocumentTitle(title) {
  if (title) {
    document.title = title;
  } else {
    document.title = "behina-bahramsari-portfolio";
  }
}

export const FormatedSrc = (src) => {
  // Check if the src is already a full URL
  const googleDriveBaseUrl = "https://drive.google.com/drive/folders/";
  if (src.startsWith(googleDriveBaseUrl)) {
    return src;
  }
  // If not, format it to be a full Google Drive folder URL
  return `${googleDriveBaseUrl}${src}?usp=drive_link`;
};
