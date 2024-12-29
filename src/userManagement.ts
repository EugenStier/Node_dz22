export namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      constructor(
        public name: string,
        public email: string,
        public isSuperAdmin: boolean
      ) {}

      changePermissions(isSuperAdmin: boolean): void {
        this.isSuperAdmin = isSuperAdmin;
      }
    }
  }
}
