import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class ShareBBApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${ShareBBApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    console.log("data", data)
    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get list of all listings. */

  static async getListings() {
    let res = await this.request(`listings/`);
    return res.listings;
  }

  /** Get a single listing. */

  static async getListing(id) {
    let res = await this.request(`listings/${id}`);
    return res.listing;
  }

  /** Get list of all bookings. */

  static async getBookings() {
    let res = await this.request(`bookings/`);
    return res.bookings;
  }

  /** Get list of all jobs. */

  // static async getJobs() {
  //   let res = await this.request(`jobs/`);
  //   return res.jobs;
  // }
  // /** Get details on a company by handle. */

  // static async getCompany(handle) {
  //   let res = await this.request(`companies/${handle}`);
  //   return res.company;
  // }
  // /** Sign a user up. */

  static async signup(formData) {
    formData.userType="renter"
    // console.log("this", this)
    let res = await this.request(`users/`, formData, "post");
    this.token = res.token;
    return res.token;
  }

  // create a new listing

  // static async postListing(formData) {
  //   let res = await this.request(`listings/`, formData, "post");

  // }

  // /** Log in a user. */

  // static async login(formData) {
  //   let res = await this.request(`auth/token`, formData, "post");
  //   this.token = res.token;
  //   return res.token;
  // }

  // /** Gets a single user. */

  // static async getUser(username) { 
  //   let res = await this.request(`users/${username}`);
  //   return res;
  // }

  // /** Patches a user. */

  // static async patchUser(username, formData) {
  //   let res = await this.request(`users/${username}`, formData, "patch");
  //   return res;
  // }

  //   /** Applies a user to a job. */

  //   static async applyUser(username, jobId) {
  //     let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
  //     return res;
  //   }

}

export default ShareBBApi;