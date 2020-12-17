import App from '../App';

import Enzyme, {
  shallow
} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});

// see : https://www.freecodecamp.org/news/testing-react-hooks/

describe('hooks', () => {
  describe('normal cases', () => {
    it('creates a b c hooks', () => {
      const definitions = ["a", "b", "c"];
      const hooks = {};
  
      shallow( < App hooks = {
          hooks
        }
        definitions = {
          definitions
        }
        />)
  
        const keys = Object.keys(hooks.generated);
  
        expect(keys.length).toBe(3);
      }
    ); 
  
    it('creates person hook with value', () => {
      const definitions = [ 
        [ "person", { name : "John Doe", date_of_birth : "1993-01-01" } ] 
      ];
      
      const hooks = {};
  
      shallow( <App hooks = { hooks } definitions = { definitions } />)
  
      const person = hooks.generated.person;
  
        expect(person.val.name).toBe("John Doe");
      }
    ); 
  });
  
  describe('exception cases', () => {
    it('repeating hook throw', () => {
      const t = () => {
        
        const definitions = [ "a", "b", "c", "a" ];
        
        shallow( < App definitions = { definitions } />);
      };
      expect(t).toThrow();
    }); 
  
    it('throws on unamed hook ', () => {
      const t = () => {
        
        const definitions = [ { value : "John Doe" } ] 
        const hooks = {};
    
        shallow( < App hooks = { hooks } definitions = { definitions } />);
      };
      expect(t).toThrow("Rehookts have to have a name defined");
    }); 
  
    it('throws on hook name is an object ', () => {
      const t = () => {
        
        const definitions = [ { name : { name : "hook" }, value : "John Doe" } ] 
        const hooks = {};
    
        shallow( < App hooks = { hooks } definitions = { definitions } />);
      };
      expect(t).toThrow("Nothing than a string can be accepted as hook name given");
    });
  
    it('throws on hook name is an array', () => {
      const t = () => {
        
        const definitions = [ { name : [], value : "John Doe" } ] 
        const hooks = {};
    
        shallow( < App hooks = { hooks } definitions = { definitions } />);
      };
      expect(t).toThrow("Nothing than a string can be accepted as hook name given");
    });
  
    it('throws on hook name is null', () => {
      const t = () => {
        
        const definitions = [ { name : null, value : "John Doe" } ] 
        const hooks = {};
    
        shallow( < App hooks = { hooks } definitions = { definitions } />)
      };
      expect(t).toThrow("Rehookts have to have a non null name");
    });    
  });
});
