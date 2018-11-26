<template>
    <div>
        <a id="impressum_btn" @click="isVisible=true">Impressum</a>
            <div id="impressum_modal" :class="{active: isVisible}" @click="isVisible=false">
                <p>
                    <strong>Impressum</strong>
                    <br>
                    Angaben gemäß § 5 TMG
                    <br><br>
                    Malte Bartels <br> 
                    Heidestraße 26<br> 
                    74336 Brackenheim <br> 
                    <strong>Vertreten durch: </strong><br>
                    Malte Bartels<br><br>
                    <strong>Kontakt:</strong> <br>
                    Telefon: 01577/0413483<br>
                    E-Mail: kontakt(at)malte-bartels.de<br><br>
                    <strong>Haftungsausschluss: </strong><br><br>
                    <strong>Haftung für Links</strong><br>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br><br><br> 
                    Impressum vom <a href="https://www.impressum-generator.de">Impressum Generator</a> der <a href="https://www.kanzlei-hasselbach.de/">Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht</a>      
                </p>
            </div>
    </div>
</template>

<script>
export default {
    name: "Impressum",
    data() {
        return {
            isVisible: false
        }
    }
}
</script>

