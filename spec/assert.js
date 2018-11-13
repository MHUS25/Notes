var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: ${assertionToCheck} is not truthy");
    }
  },

  isEqualTo: function(assertionToCheck1, assertionToCheck2) {
    if (assertionToCheck1 !== assertionToCheck2) {
      throw new Error("Assertion failed: ${assertionToCheck1} not equal to ${assertionToCheck2}");
    }
  }
};
