import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public playerConfig = {"context":{"mode":"play","authToken":"","sid":"7283cf2e-d215-9944-b0c5-269489c6fa56","did":"3c0a3724311fe944dec5df559cc4e006","uid":"anonymous","channel":"505c7c48ac6dc1edc9b08f21db5a571d","pdata":{"id":"prod.diksha.portal","ver":"3.2.12","pid":"sunbird-portal.contentplayer"},"contextRollup":{"l1":"505c7c48ac6dc1edc9b08f21db5a571d"},"tags":[""],"cdata":[],"timeDiff":0,"objectRollup":{},"host":"","endpoint":"","userData":{"firstName":"Vivek","lastName":"Kasture"}},"config":{"traceId":"afhjgh","sideMenu":{"showShare":true,"showDownload":true,"showReplay":true,"showExit":true}},"metadata":{"compatibilityLevel":4,"copyright":"Tamilnadu","keywords":["b301epdf","b302epdf","epdf","1epdft1"],"subject":["Tamil"],"channel":"01235953109336064029450","language":["English"],"mimeType":"application/pdf","objectType":"Content","gradeLevel":["Class 1"],"appIcon":"https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/do_31291455031832576019477/artifact/3_1535000262441.thumb.png","primaryCategory":"Teacher Resource","artifactUrl":"https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/assets/do_31291455031832576019477/b301b302_std_1_tamilenglish_lang_term-1_opt.pdf","contentType":"FocusSpot","identifier":"do_31291455031832576019477","audience":["Teacher"],"visibility":"Default","mediaType":"content","osId":"org.ekstep.quiz.app","languageCode":["en"],"license":"CC BY 4.0","name":"B301,B302_STD_1_TAMIL,ENGLISH_LANG_TERM 1_OPT","status":"Live","code":"43e68089-997e-49a4-902a-6262e5654515","description":"epdf","streamingUrl":"https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/assets/do_31291458881611366418883/b331332333_std_5_mathssciencesocial_tm_term-1_opt.pdf","medium":["Tamil"],"createdOn":"2019-12-16T07:59:53.154+0000","copyrightYear":2019,"additionalCategories":["Focus Spot"],"lastUpdatedOn":"2019-12-16T11:52:56.405+0000","creator":"SCERT 2 ECONTENTS","pkgVersion":1,"versionKey":"1576497176405","framework":"tn_k-12_5","createdBy":"f4f80b17-8609-44b9-b781-b79df5cf7e8d","board":"State (Tamil Nadu)","resourceType":"Read","licenseDetails":{"name":"CC BY 4.0","url":"https://creativecommons.org/licenses/by/4.0/legalcode","description":"For details see below:"}},"data":{}}
  title = 'sample-app';
  myPlayer: any;

  ngOnInit(): void {
  console.log('app componenet on in it');
  }
  handleEvent(event: any) {
    console.log(event, 'event');
  }
}
