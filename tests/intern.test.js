const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object containing a email, phone number, employee ID and role with the school they went too", () => {
      const obj = new Intern('Jared', '3', 'test@email.com', 'GT Bootcamp');

      expect(obj.name).toEqual('Jared');
      expect(obj.id).toEqual('3');
      expect(obj.email).toEqual('test@email.com');
      expect(obj.school).toEqual('GT Bootcamp');
    });
  })
});