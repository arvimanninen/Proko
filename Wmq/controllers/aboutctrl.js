/**
 * Created by Arvi on 1/9/2017.
 */
app.controller('AboutCtrl', function AboutCtrl(aboutService) {
    var aboutInfo = aboutService.getInfo();

    this.name = "Jee jee";
    console.log("This.name: " + this.name);
    this.version = aboutInfo.version;
    this.madeBy = aboutInfo.madeBy;
    this.year = aboutInfo.year;
    this.license = aboutInfo.license;
});