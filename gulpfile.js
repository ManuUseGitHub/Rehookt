const gulp = require( 'gulp' );
const del  = require( 'del' );
const fs   = require( "fs" );

const { watch } = gulp;


function copyFolder( cb ) {

    try{
        if( fs.existsSync( 'rehookt' ) ){

            del( ['rehookt/**/*'], { force : false } );
        }
        
        gulp
            .src( [ 'node_modules/rehookt/**/*' ] )
            .pipe( gulp.dest( 'rehookt' ) );
            
    }
    catch( err ){

    }

    cb();
}

exports.default = () => {

    watch( 'node_modules/rehookt/**/*', copyFolder );
}