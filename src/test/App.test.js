const React = require( 'react' );
const App = require( '../App' );
const Enzyme =require( 'enzyme' );
const { shallow } = Enzyme;
const Adapter = require( 'enzyme-adapter-react-16' );

Enzyme.configure({
  adapter: new Adapter()
});

const shallowAppWithHooks = (hooks,definitions) => {
  shallow( <App hooks = { hooks }
    definitions = { definitions } />)
}

// see : https://www.freecodecamp.org/news/testing-react-hooks/

describe('hooks', () => {
  describe('normal cases', () => {
    it('creates a b c hooks', () => {
      const definitions = ["a", "b", "c"];
      const hooks = {};
  
      shallow( <App hooks = { hooks } definitions = { definitions } />)
  
        const keys = Object.keys(hooks.generated);
  
        expect(keys.length).toBe(3);
      }
    ); 
    it('creates a b c hook', () => {
      const definitions = ["a","b","c"];
      const hooks = {};

      shallowAppWithHooks(hooks,definitions);
  
      const keys = Object.keys(hooks.generated);

      expect(keys.length).toBe(3);
      }
    ); 

    it('creates hooks numberized from 10', () => {
      const definitions = [[ "rehookt_x",{x : 10, n : 10 , f: (x) =>{
        return x ;
      }}]];
      const hooks = {};
  
      shallowAppWithHooks(hooks,definitions);
  
        const keys = Object.keys(hooks.generated);
  
        expect(keys.length).toBe(10);
      }
    ); 
  
    it('creates person hook with value', () => {
      const definitions = [ 
        [ "person", { name : "John Doe", date_of_birth : "1993-01-01" } ] 
      ];
      
      const hooks = {};
  
      shallowAppWithHooks(hooks,definitions);
  
      const person = hooks.generated.person;
  
        expect(person.val.name).toBe("John Doe");
      }

      
    ); 

    it('creates no hook', () => {
      const definitions = [ "REHOOKT_NONE" ];
      
      const hooks = {};
  
      shallowAppWithHooks(hooks,definitions);
  
      const keys = Object.keys(hooks.generated);
  
        expect(keys.length).toBe( 0 );
      }
    ); 

    it('special hook REHOOKT_NONE has to be the only one', () => {
      const t = () => {
        
        const definitions = [ "REHOOKT_NONE", "hello"];

        const hooks = {};

        shallowAppWithHooks(hooks,definitions);
        console.log(hooks);
      };
        expect(t).toThrow('Special definition REHOOKT_NONE cannot coexist with any other definition')
      }
    ); 

    it('special definition for REHOOKT_X can coexist', () => {
      const definitions = [ "Hello", [ "rehookt_x",{x : 10, n : 10 , f: (x) =>{
        return x ;
      }}] ];
      
      const hooks = {};
  
      shallowAppWithHooks(hooks,definitions);
  
      const keys = Object.keys(hooks.generated);
  
        expect(keys.length).toBe( 11 );
      }
      
    ); 

    it('creates no hook lowercase', () => {
      const definitions = [ "rehookt_none" ];
      
      const hooks = {};
  
      shallowAppWithHooks(hooks,definitions);
  
      const keys = Object.keys(hooks.generated);
  
        expect(keys.length).toBe( 0 );
      }
    ); 

    it('creates no hook with object', () => {
      const definitions = [ { name : "rehookt_none", value : "data" } ];
      
      const hooks = {};
  
      shallowAppWithHooks(hooks,definitions);
  
      const keys = Object.keys(hooks.generated);
  
        expect(keys.length).toBe( 0 );
      }
    );    

    it('creates no hook with array', () => {
      const definitions = [ [ "rehookt_none", "data" ] ];
      
      const hooks = {};
  
      shallowAppWithHooks(hooks,definitions);
  
      const keys = Object.keys(hooks.generated);
  
        expect(keys.length).toBe( 0 );
      }
    ); 
  });
  
  describe('exception cases', () => {
    it('repeating hook throw', () => {
      const t = () => {
        
        const definitions = [ "a", "b", "c", "a" ];
        const hooks = {};

        shallowAppWithHooks(hooks,definitions);
      };
      expect(t).toThrow();
    }); 

    it('hook with number is prefixed by rh_ and floating dot is change by comma', () => {
      const t = () => {
        
        const definitions = [ 1.2 ];
        const hooks = {};

        shallowAppWithHooks(hooks,definitions);

        const keys = Object.keys(hooks.generated);
        expect(keys.length).toBe( 1 );
      };
    }); 

    it('null hook arg', () => {
      const t = () => {
        
        const definitions = [ null ];
        const hooks = {};
        
        shallowAppWithHooks(hooks,definitions);
      };
      expect(t).toThrow("Wrong hook referer exception");
    }); 
  
    it('throws on unamed hook', () => {
      const t = () => {
        
        const definitions = [ { value : "John Doe" } ] 
        const hooks = {};
    
        shallowAppWithHooks(hooks,definitions);
      };
      expect(t).toThrow("Rehookts have to have a name defined");
    }); 

    it('throws on starting by a special char named hook', () => {
      const t = () => {
        
        const definitions = [ "%False_name" ] 
        const hooks = {};
    
        shallowAppWithHooks(hooks,definitions);
      };
      expect(t).toThrow("A rehookt hook name should be valid");
    }); 
    
    it('throws on having a space char named hook', () => {
      const t = () => {
        
        const definitions = [ " False_name" ] 
        const hooks = {};
    
        shallowAppWithHooks(hooks,definitions);
      };
      expect(t).toThrow("A rehookt hook name should be valid");
    });

    it('throws on having a linebreak char named hook', () => {
      const t = () => {
        
        const definitions = [ "False\nname" ] 
        const hooks = {};
    
        shallowAppWithHooks(hooks,definitions);
      };
      expect(t).toThrow("A rehookt hook name should be valid");
    });

      it('throws on having a first numeric char', () => {
        const t = () => {
          
          const definitions = [ "0False_name" ] 
          const hooks = {};
      
          shallowAppWithHooks(hooks,definitions);
        };
        expect(t).toThrow("A rehookt hook name should be valid");
    }); 
  
    it('throws on having a special char', () => {
      const t = () => {
        
        const definitions = [ "False+-*/name" ] 
        const hooks = {};
    
        shallowAppWithHooks(hooks,definitions);
      };
      expect(t).toThrow("A rehookt hook name should be valid");
  }); 

    it('throws on hook name is an object', () => {
      const t = () => {
        
        const definitions = [ { name : { name : "hook" }, value : "John Doe" } ] 
        const hooks = {};
    
        shallowAppWithHooks(hooks,definitions);
      };
      expect(t).toThrow("Nothing than a string can be accepted as hook name given");
    });
  
    it('throws on hook name is an array', () => {
      const t = () => {
        
        const definitions = [ { name : [], value : "John Doe" } ] 
        const hooks = {};
    
        shallowAppWithHooks(hooks,definitions);
      };
      expect(t).toThrow("Nothing than a string can be accepted as hook name given");
    });
  
    it('throws on hook name is null', () => {
      const t = () => {
        
        const definitions = [ { name : null, value : "John Doe" } ] 
        const hooks = {};
    
        shallowAppWithHooks(hooks,definitions);
      };
      expect(t).toThrow("Rehookts have to have a non null name");
    });    
  });
});
