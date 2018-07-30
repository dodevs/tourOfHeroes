with import <nixpkgs> {};
stdenv.mkDerivation rec {
    name = "nodeEnv";
    env = buildEnv { name = name; paths = buildInputs; };
    buildInputs = [
        nodejs-8_x
    ];
    shellHook = 
        ''
            export PATH="$PATH:$PWD/node_modules/.bin"
        '';
}