
/* ---
 
   Bring your elements to life by making them aware of their neighbors.

   Works on sibling elements. A common use case may be elements
   rendered in a vertical list or a grid of elements.

   Each sibling element knows how far away its neighbor is.
   Neighborly distance can be used as an input in animation
   callbacks allowing one to create the effect of interacting
   with 'regions' of dom elements rather than a single element
   at a time. Imagine touching an element, causing it to bounce
   while also causing a rippling bouncing effect through nearby 
   elements that gets weaker as the bounce travels further away.

   This will be very efficient and should work in O(3N) time by 
   comparing each element to a sparse array of _all_ the elements.

   As a later to-do, this could also be used for collision detection.
 
--- */

var AwakeN = (function($){
    
    var awaken = {},
        awaken.things=[],
        awaken.elements=[],
        that = this;

    awaken.__init__ = function(classname, animateFunc){
        awaken.get(classname);

    }();

    awaken.addThing = function(sparse, thing){
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
            sparse = awaken.addThing(sparse, thing);
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
