
/* ---
 
   Bring your elements to life by making them aware of their neighbors.

   A common use case may be elements rendered in a vertical list or a 
   grid of elements.

   Distance to neighboring elements can be used as an input in 
   animation callbacks allowing one to create the effect of 
   interacting with 'regions' of elements rather than a single 
   element at a time. Imagine touching or mousing over an element, 
   causing it to bounce and causing neighboring elements to
   bounce proportionately to their distance.

--- */

;var AwakeN = (function($){
    'use strict';
    
    var 
        awaken = {},
        awaken.things=[],
        awaken.elements=[],
        that = this;

    awaken.__init__ = function(classname, animateFunc){
        awaken.get(classname);

    }();

    function addThing(sparse, thing){
        var 
            el = $(thing.el),
            y1 = el.offset.top,
            y2 = y1 + el.outerHeight(),
            x1 = el.offset.left,
            x2 = x1 + el.outerWidth();
        $.each([x1,x2], function(a, x){
            if(typeof sparse[x] === 'undefined'){ sparse[x] = []; }
            $.each([y1,y2], function(b,y){
                if(typeof sparse[x][y] === 'undefined'){ sparse[x][y] = []; } 
                sparse[x][y].push(thing);
            }
        }
        return sparse;
    }

    awaken.get = function(classname){
        // create thing list:
        var things = [];
        $.each($(classname), function(idx, el){
            thing={
                'element': el,
                'element_index': idx,
                'sparse_array': []
            }
            things.push(thing);
        });
        // create sparse array:
        //   The indices correspond to X coordinates
        //   Each indice contains an array, M, of Y coordinates
        //   Each Y coordinate in M contains a list of Things.
        var sparse = [];
        $.each(things, function(a, thing)){
            sparse = addThing(sparse, thing);
        }
        
        // compare things to sparse array:
        $.each(things, function(a, thing){
            
        });
    }

    awaken.distances = function(){
        $.each(awaken.things, function(idx, thing){

        });
    }

    return awaken;
}(jQuery));
