export const convertTime = (ms: number)=> {
  let msInSeconds = Math.floor(ms/1000);
  let minutes = Math.floor(msInSeconds/60);
  let seconds = msInSeconds % 60;
  return `${minutes.toString()} : ${seconds.toString().padStart(2, "0")}`;
}