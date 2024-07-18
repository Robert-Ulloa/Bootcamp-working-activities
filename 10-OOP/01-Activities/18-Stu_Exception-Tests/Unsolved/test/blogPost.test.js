const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  describe('constructor',()=>{
  it('should throw error when authorName provided is less than 2 characters long',()=>{
    // AAA = Arrange Act assert
    //Arrange
    const invalidInput = "j"; //should  be invalid
    //Act
    const newPost = new BlogPost(invalidInput);
   
    let error;
    try {
      const newPost = new BlogPost(invalidInput);
    } catch (err){
    }
     //Assert
     expect(error).toBeDefined()
  });

  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
  it ('should throw an error  when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscore', ()=> {});
  const invalidInput = "J!dskjnfd2"; //should  be invalid
    //Act
     //Assert
     expect(()=>new BlogPost(invalidInput)).toThrow();
  });
});
