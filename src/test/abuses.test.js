import App from '../App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({

    adapter: new Adapter()
});


describe('abusive cases', () => {

    it('throws on empty hook list', () => {

        const t = () => shallow( < App definitions = { [] } />);

        expect(t).toThrow("Rehookt need definitions to work on");
    });

    it('throws on too much hooks to create', () => {

        const t = () => {

            const lotOfHooks = [];
            
            const zeroPad = ( num, places ) => String( num ).padStart( places, '0' )
    
            for(let i = 1; i < 101; ++i){
    
                lotOfHooks.push( `hook${zeroPad(i, 2)}` );
            }
            
            shallow( < App definitions = { lotOfHooks } />)
        };

        expect(t).toThrow("Rehookt prefers not to create an abusive number of rehookts");
    });
});