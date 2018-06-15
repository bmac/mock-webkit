function foo()
{
    throw new Error();
}

function bar()
{
    foo();
}

function baz()
{
    bar();
}

function thingy()
{
    try {
        baz();
    } catch (e) {
        if (e.constructor != Error)
            throw new Error("Bad error: " + e);
    }
}

for (var i = 0; i < 10000; ++i)
    thingy();

