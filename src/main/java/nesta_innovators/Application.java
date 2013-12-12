package nesta_innovators;

import clojure.lang.Symbol;
import nesta_innovators.clojure.api.API;

public class Application {

    public static final Symbol NESTA=Symbol.intern("nesta-innovators.quick");

    public static void main(String[] args) {

        Object ns = API.var("clojure.core", "require").invoke(NESTA);

        API.var(ns, Symbol.intern("main")).invoke(args);
    }
}

