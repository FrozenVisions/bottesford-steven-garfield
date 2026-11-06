const linkClass = "underline underline-offset-4"

export function PhotoCredits() {
  return (
    <>
      Photos: Pexels, plus Unsplash photos by{" "}
      <a className={linkClass} href="https://unsplash.com/photos/a-very-large-pink-full-moon-rising-over-a-forest-g7iIhEsy5TI">
        Maciek Sulkowski
      </a>
      ,{" "}
      <a className={linkClass} href="https://unsplash.com/photos/a-large-stone-structure-in-the-middle-of-a-field-yP8HHiF2okM">
        Priyank V
      </a>{" "}
      and{" "}
      <a className={linkClass} href="https://unsplash.com/photos/the-stonehenge-monument-in-the-middle-of-a-field-MWbiKdcycHU">
        Iryna Marienko
      </a>
      . Also, via Wikimedia Commons and Geograph:{" "}
      <a className={linkClass} href="https://commons.wikimedia.org/wiki/File:Castlerigg_Stone_Circle_with_Latrigg_behind.jpg">
        Castlerigg stone circle by Dominic Nelson
      </a>{" "}
      (
      <a className={linkClass} href="https://creativecommons.org/licenses/by-sa/4.0">
        CC BY-SA 4.0
      </a>
      ),{" "}
      <a className={linkClass} href="https://www.geograph.org.uk/photo/8229296">
        Stanton Drew at night by Neil Owen
      </a>{" "}
      (
      <a className={linkClass} href="https://creativecommons.org/licenses/by-sa/2.0">
        CC BY-SA 2.0
      </a>
      ), and{" "}
      <a className={linkClass} href="https://www.geograph.org.uk/photo/2271111">
        oak in the mist by Sally
      </a>{" "}
      (
      <a className={linkClass} href="https://creativecommons.org/licenses/by-sa/2.0">
        CC BY-SA 2.0
      </a>
      ).
    </>
  )
}
