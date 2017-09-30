(function() {
    var _ = function(obj) {
        return new _(obj);
    };

    self._1 = _;

    _.initial = function(array, n) {
        return Array.prototype.slice.call(array, 0, Math.max(0, array.length - (n == null ? 1 : n)));
    }

    _.rest = function(array, n) {
        return Array.prototype.slice.call(array, Math.min(array.length - 1, (n == null ? 1 : n)), array.length);
    }

    _.first = function(array, n) {
        if (array == null || array.length < 1) return void 0;
        if (!n) n = 1;
        var length = array.length;
        return _.initial(array, length - n);
    }

    _.last = function(array, n) {
        if (array == null || array.length < 1) return void 0;
        if (!n) n = 1;
        var length = array.length;
        return _.rest(array, length - n);
    };


    _.filter = function(obj, predicate) {
        var results = [];
        obj.map(function(value, index, list) {
            if (predicate(value, index, list)) results.push(value);
        });
        return results;
    }

    _.compact = function(array) {
        var arrayB = [];
        return _.filter(array, Boolean);
    };

    var flatten = function(input,shallow,output) {
    	output = output || [];
    	input.map(function(value) {
            if (Array.isArray(value)) {
                if (shallow) {
                    value.map(function(m) {
                        output.push(m);
                    })
                } else {
                    flatten(value, shallow, output);
                }
            } else {
                output.push(value);
            }
        })
        return output;
    }

    _.flatten = function(array, shallow) {
        return flatten(array,shallow);
    }

    _.delete = function(array, n){
    	var result = [];
    	array.map(function(value){
    		if(n !== value) result.push(value);
    	});
    	return result;
    }

    _.without = function(array, otherArrays){
    	var result = array;
    	for(var i = 1; i < arguments.length; i++) {
    		if(result.indexOf(arguments[i]) > -1) {
    			result = _.delete(result,arguments[i]);
    		}
    	}
    	return result;
    }

    _.uniq = function(array, [isSorted], [iteratee]){
    	var result = [];
    	array.
    }

    _.union = function(){

    }
}());