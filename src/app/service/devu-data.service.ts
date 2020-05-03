import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins, Capacitor, FilesystemDirectory } from '@capacitor/core' ;

const { Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class DevuDataService {
  public udhars:Devu[] = [];

  public reports = {};

  // key for the data storage
  private DATA_STORAGE: string = "udhars";

  constructor(private platform: Platform) {   }

  public async addDevu(category, description){
    this.udhars.unshift({
      category: category,
      description: description,
      timestamp: new Date(),
      status: false
    });

    // saving photo details as key value pair
    Storage.set({
      key: this.DATA_STORAGE,
      value: this.platform.is('hybrid')
              ? JSON.stringify(this.udhars)
              : JSON.stringify(this.udhars.map(p => {
                return p;
              }))
    });
  }

  public async loadSaved() {
    // Retrieve cached photo array data
    const udhars = await Storage.get({ key: this.DATA_STORAGE });
    this.udhars = JSON.parse(udhars.value) || [];
  }

  public bhajanDone(event){
    const index = this.udhars.indexOf(event);
    this.udhars[index].status = true;

    // saving photo details as key value pair
    Storage.set({
      key: this.DATA_STORAGE,
      value: this.platform.is('hybrid')
              ? JSON.stringify(this.udhars)
              : JSON.stringify(this.udhars.map(p => {
                return p;
              }))
    });
  }

  public async generateReport(){
    await this.loadSaved();
    for(let udhar of this.udhars){
      const key = new Date(udhar.timestamp).setHours(0,0,0,0);
      var report;
      if(key in this.reports){
        report = this.reports[key];
      } else {
        this.reports[key] = {completed: 0, incomplete: 0, total: 0};
        report = this.reports[key];
      }
        
      if(udhar.status)
        report.completed++;
      else
        report.incomplete++;
      report.total++;
    }
    console.log(this.reports);
  }

  public async generateReport2(){
    await this.loadSaved();
    this.reports = {};
    for(let udhar of this.udhars){
      const key = new Date(udhar.timestamp).setHours(0,0,0,0);
      var report;
      if(key in this.reports){
        report = this.reports[key];
      } else {
        this.reports[key] = {Hath: 0, Maan: 0, Irsha: 0, Kaam: 0, Krodh: 0, Lobh: 0};
        report = this.reports[key];
      }
      switch(udhar.category){
        case "Hath":
          report.Hath++;
          break;
        case "Maan":
          report.Maan++;
          break;
        case "Irsha":
          report.Irsha++;
          break;
        case "Kaam":
          report.Kaam++;
          break;
        case "Krodh":
          report.Krodh++;
          break;
        case "Lobh":
          report.Lobh++;
          break;
      }
    }
    console.log(this.reports);
  }
}

interface Devu{
  category: string,
  description: string,
  timestamp: Date,
  status: boolean
}