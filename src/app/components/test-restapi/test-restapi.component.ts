import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-test-restapi',
  templateUrl: './test-restapi.component.html',
  styles: []
})
export class TestRestapiComponent implements OnInit {

  users: any[];
  user: any;
  postsFromUser: any[];
  post: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.insertUser({
    //   name: "Rejane",
    //   email: "rejane@gmail.com"
    // });
    // this.deleteUser("5d04388c4a2ae81c9c00519e");
    // this.updateUser({
    //   name: "Maria Red",
    //   email: "maria.red@gmail.com"
    // }, "5d04497c4a2ae84b7499eee0")
    this.getUsers();
    this.getUserById("5d083e584a2ae83d00fa868a");
    this.getPostsFromUser("5d083e584a2ae83d00fa868a");
    this.getPostById("5d083e584a2ae83d00fa868d");
  }

  getUsers() {
    this.http.get("/api/users").subscribe(v => {
      this.users = v as any[];
    })
  }

  getUserById(id: string) {
    this.http.get(`/api/users/${id}`).subscribe(v => {
      this.user = v;
    })
  }

  insertUser(user: any) {
    this.http.post(`/api/users`, user).subscribe(v => {
      console.log("insertUser: ", v);
    });
  }

  deleteUser(id: string) {
    this.http.delete(`/api/users/${id}`).subscribe(v => {
      console.log("deleteUser: ", v);
    })
  }

  updateUser(newUser: any, id: string) {
    this.http.put(`/api/users/${id}`, newUser).subscribe(v => {
      console.log("updateUser");
    });
  }

  getPostsFromUser(idUser: string) {
    this.http.get(`/api/users/${idUser}/posts`).subscribe(v => {
      this.postsFromUser = v as any[];
    });
  }

  getPostById(idPost: string) {
    this.http.get(`/api/posts/5d083e584a2ae83d00fa868d`).subscribe(v => {
      console.log("getPostById: ", v);

      this.post = v;
    })
  }
}
