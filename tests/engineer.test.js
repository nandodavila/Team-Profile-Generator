const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return an object containing a email, phone number, employee ID and role with github", () => {
      const obj = new Engineer('Jared', '3', 'test@email.com', 'nandodavila');

      expect(obj.name).toEqual('Jared');
      expect(obj.id).toEqual('3');
      expect(obj.email).toEqual('test@email.com');
      expect(obj.github).toEqual('nandodavila')
    });
  })
});