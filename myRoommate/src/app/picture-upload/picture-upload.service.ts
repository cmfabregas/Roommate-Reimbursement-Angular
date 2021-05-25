import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as AWS from 'aws-sdk';
import { ReimbursementClass } from '../request-payment/reimbursement';

@Injectable({
  providedIn: 'root'
})
export class PictureUploadService {
  constructor(private http: HttpClient) { }

  private urlBase = "http://localhost:9010/reimbursements/updatePicture";

  public uploadImage(image: any, http: HttpClient): void {


    function putReimbursement(reimbursement:any, http: HttpClient): Observable<any> {
      console.log('in post');
      const urlBase = "http://localhost:9010/reimbursements/updatePicture";
      const httpHead = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      };
      return http.post<any>(urlBase, reimbursement, httpHead);
  
    }


    const s3 = new AWS.S3({
      region: "us-east-2",
      accessKeyId: "AKIATUENPGFAHTR7LF7F",
      secretAccessKey: "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",
    });

    const params = {
      Bucket: 'project2angularbucket',
      Key: "/pictures/" + image.name,
      Body: image,
      ACL: 'public-read',
      ContentType: 'multipart/form-data'
    };

    s3.upload(params, function (err:any, data:any) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      console.log(data.Location);
      console.log(putReimbursement(data, http));
      
      return true;
    });
  }

}
