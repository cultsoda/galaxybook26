module.exports = [
"[project]/Desktop/galaxybook26/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/compose-refs/src/composeRefs.tsx
__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/galaxybook26/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/slot/src/Slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
var Slot = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(null);
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
            } else {
                return child;
            }
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
        ...slotProps,
        ref: forwardedRef,
        children
    });
});
Slot.displayName = "Slot";
var SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
        const childrenRef = getElementRef(children);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](children, {
            ...mergeProps(slotProps, children.props),
            // @ts-ignore
            ref: forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children })=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children
    });
};
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    childPropValue(...args);
                    slotPropValue(...args);
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root = Slot;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/galaxybook26/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Desktop/galaxybook26/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("CircleCheck", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
;
 //# sourceMappingURL=circle-check.js.map
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const CircleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("CircleX", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m15 9-6 6",
            key: "1uzhvr"
        }
    ],
    [
        "path",
        {
            d: "m9 9 6 6",
            key: "z0biqf"
        }
    ]
]);
;
 //# sourceMappingURL=circle-x.js.map
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ChevronRight", [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ChevronLeft", [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-left.js.map
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>House
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const House = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("House", [
    [
        "path",
        {
            d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
            key: "5wwlr5"
        }
    ],
    [
        "path",
        {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "1d0kgt"
        }
    ]
]);
;
 //# sourceMappingURL=house.js.map
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Home",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>BookOpen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const BookOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("BookOpen", [
    [
        "path",
        {
            d: "M12 7v14",
            key: "1akyts"
        }
    ],
    [
        "path",
        {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y"
        }
    ]
]);
;
 //# sourceMappingURL=book-open.js.map
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookOpen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Star
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Star", [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
]);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Star",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Trophy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Trophy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Trophy", [
    [
        "path",
        {
            d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
            key: "17hqa7"
        }
    ],
    [
        "path",
        {
            d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
            key: "lmptdp"
        }
    ],
    [
        "path",
        {
            d: "M4 22h16",
            key: "57wxv0"
        }
    ],
    [
        "path",
        {
            d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
            key: "1nw9bq"
        }
    ],
    [
        "path",
        {
            d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
            key: "1np0yb"
        }
    ],
    [
        "path",
        {
            d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
            key: "u46fv3"
        }
    ]
]);
;
 //# sourceMappingURL=trophy.js.map
}),
"[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trophy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/clamp.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage
]);
function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") !== "production") {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ __turbopack_context__.s([
    "isNumericalString",
    ()=>isNumericalString
]);
const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "noop",
    ()=>noop
]);
const noop = (any)=>any;
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/global-config.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>MotionGlobalConfig
]);
const MotionGlobalConfig = {};
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ __turbopack_context__.s([
    "isZeroValueString",
    ()=>isZeroValueString
]);
const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/warn-once.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUniqueItem",
    ()=>addUniqueItem,
    "moveItem",
    ()=>moveItem,
    "removeItem",
    ()=>removeItem
]);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)");
;
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ __turbopack_context__.s([
    "velocityPerSecond",
    ()=>velocityPerSecond
]);
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/pipe.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ __turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezier",
    ()=>cubicBezier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
;
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeIn",
    ()=>easeIn,
    "easeInOut",
    ()=>easeInOut,
    "easeOut",
    ()=>easeOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEasingArray",
    ()=>isEasingArray
]);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
__turbopack_context__.s([
    "mirrorEasing",
    ()=>mirrorEasing
]);
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
__turbopack_context__.s([
    "reverseEasing",
    ()=>reverseEasing
]);
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backIn",
    ()=>backIn,
    "backInOut",
    ()=>backInOut,
    "backOut",
    ()=>backOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anticipate",
    ()=>anticipate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
;
const anticipate = (p)=>(p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circIn",
    ()=>circIn,
    "circInOut",
    ()=>circInOut,
    "circOut",
    ()=>circOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easingDefinitionToFunction",
    ()=>easingDefinitionToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "progress",
    ()=>progress
]);
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "memo",
    ()=>memo
]);
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
}),
"[project]/Desktop/galaxybook26/node_modules/motion-utils/dist/es/is-object.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
}),
"[project]/Desktop/galaxybook26/node_modules/page-flip/dist/js/page-flip.browser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(t, e) {
    ("TURBOPACK compile-time truthy", 1) ? e(exports) : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(t) {
    "use strict";
    class e {
        constructor(t, e){
            this.state = {
                angle: 0,
                area: [],
                position: {
                    x: 0,
                    y: 0
                },
                hardAngle: 0,
                hardDrawingAngle: 0
            }, this.createdDensity = e, this.nowDrawingDensity = this.createdDensity, this.render = t;
        }
        setDensity(t) {
            this.createdDensity = t, this.nowDrawingDensity = t;
        }
        setDrawingDensity(t) {
            this.nowDrawingDensity = t;
        }
        setPosition(t) {
            this.state.position = t;
        }
        setAngle(t) {
            this.state.angle = t;
        }
        setArea(t) {
            this.state.area = t;
        }
        setHardDrawingAngle(t) {
            this.state.hardDrawingAngle = t;
        }
        setHardAngle(t) {
            this.state.hardAngle = t, this.state.hardDrawingAngle = t;
        }
        setOrientation(t) {
            this.orientation = t;
        }
        getDrawingDensity() {
            return this.nowDrawingDensity;
        }
        getDensity() {
            return this.createdDensity;
        }
        getHardAngle() {
            return this.state.hardAngle;
        }
    }
    class i extends e {
        constructor(t, e, i){
            super(t, i), this.image = null, this.isLoad = !1, this.loadingAngle = 0, this.image = new Image, this.image.src = e;
        }
        draw(t) {
            const e = this.render.getContext(), i = this.render.convertToGlobal(this.state.position), s = this.render.getRect().pageWidth, n = this.render.getRect().height;
            e.save(), e.translate(i.x, i.y), e.beginPath();
            for (let t of this.state.area)null !== t && (t = this.render.convertToGlobal(t), e.lineTo(t.x - i.x, t.y - i.y));
            e.rotate(this.state.angle), e.clip(), this.isLoad ? e.drawImage(this.image, 0, 0, s, n) : this.drawLoader(e, {
                x: 0,
                y: 0
            }, s, n), e.restore();
        }
        simpleDraw(t) {
            const e = this.render.getRect(), i = this.render.getContext(), s = e.pageWidth, n = e.height, h = 1 === t ? e.left + e.pageWidth : e.left, r = e.top;
            this.isLoad ? i.drawImage(this.image, h, r, s, n) : this.drawLoader(i, {
                x: h,
                y: r
            }, s, n);
        }
        drawLoader(t, e, i, s) {
            t.beginPath(), t.strokeStyle = "rgb(200, 200, 200)", t.fillStyle = "rgb(255, 255, 255)", t.lineWidth = 1, t.rect(e.x + 1, e.y + 1, i - 1, s - 1), t.stroke(), t.fill();
            const n = {
                x: e.x + i / 2,
                y: e.y + s / 2
            };
            t.beginPath(), t.lineWidth = 10, t.arc(n.x, n.y, 20, this.loadingAngle, 3 * Math.PI / 2 + this.loadingAngle), t.stroke(), t.closePath(), this.loadingAngle += .07, this.loadingAngle >= 2 * Math.PI && (this.loadingAngle = 0);
        }
        load() {
            this.isLoad || (this.image.onload = ()=>{
                this.isLoad = !0;
            });
        }
        newTemporaryCopy() {
            return this;
        }
        getTemporaryCopy() {
            return this;
        }
        hideTemporaryCopy() {}
    }
    class s {
        constructor(t, e){
            this.pages = [], this.currentPageIndex = 0, this.currentSpreadIndex = 0, this.landscapeSpread = [], this.portraitSpread = [], this.render = e, this.app = t, this.currentPageIndex = 0, this.isShowCover = this.app.getSettings().showCover;
        }
        destroy() {
            this.pages = [];
        }
        createSpread() {
            this.landscapeSpread = [], this.portraitSpread = [];
            for(let t = 0; t < this.pages.length; t++)this.portraitSpread.push([
                t
            ]);
            let t = 0;
            this.isShowCover && (this.pages[0].setDensity("hard"), this.landscapeSpread.push([
                t
            ]), t++);
            for(let e = t; e < this.pages.length; e += 2)e < this.pages.length - 1 ? this.landscapeSpread.push([
                e,
                e + 1
            ]) : (this.landscapeSpread.push([
                e
            ]), this.pages[e].setDensity("hard"));
        }
        getSpread() {
            return "landscape" === this.render.getOrientation() ? this.landscapeSpread : this.portraitSpread;
        }
        getSpreadIndexByPage(t) {
            const e = this.getSpread();
            for(let i = 0; i < e.length; i++)if (t === e[i][0] || t === e[i][1]) return i;
            return null;
        }
        getPageCount() {
            return this.pages.length;
        }
        getPages() {
            return this.pages;
        }
        getPage(t) {
            if (t >= 0 && t < this.pages.length) return this.pages[t];
            throw new Error("Invalid page number");
        }
        nextBy(t) {
            const e = this.pages.indexOf(t);
            return e < this.pages.length - 1 ? this.pages[e + 1] : null;
        }
        prevBy(t) {
            const e = this.pages.indexOf(t);
            return e > 0 ? this.pages[e - 1] : null;
        }
        getFlippingPage(t) {
            const e = this.currentSpreadIndex;
            if ("portrait" === this.render.getOrientation()) return 0 === t ? this.pages[e].newTemporaryCopy() : this.pages[e - 1];
            {
                const i = 0 === t ? this.getSpread()[e + 1] : this.getSpread()[e - 1];
                return 1 === i.length || 0 === t ? this.pages[i[0]] : this.pages[i[1]];
            }
        }
        getBottomPage(t) {
            const e = this.currentSpreadIndex;
            if ("portrait" === this.render.getOrientation()) return 0 === t ? this.pages[e + 1] : this.pages[e - 1];
            {
                const i = 0 === t ? this.getSpread()[e + 1] : this.getSpread()[e - 1];
                return 1 === i.length ? this.pages[i[0]] : 0 === t ? this.pages[i[1]] : this.pages[i[0]];
            }
        }
        showNext() {
            this.currentSpreadIndex < this.getSpread().length && (this.currentSpreadIndex++, this.showSpread());
        }
        showPrev() {
            this.currentSpreadIndex > 0 && (this.currentSpreadIndex--, this.showSpread());
        }
        getCurrentPageIndex() {
            return this.currentPageIndex;
        }
        show(t = null) {
            if (null === t && (t = this.currentPageIndex), t < 0 || t >= this.pages.length) return;
            const e = this.getSpreadIndexByPage(t);
            null !== e && (this.currentSpreadIndex = e, this.showSpread());
        }
        getCurrentSpreadIndex() {
            return this.currentSpreadIndex;
        }
        setCurrentSpreadIndex(t) {
            if (!(t >= 0 && t < this.getSpread().length)) throw new Error("Invalid page");
            this.currentSpreadIndex = t;
        }
        showSpread() {
            const t = this.getSpread()[this.currentSpreadIndex];
            2 === t.length ? (this.render.setLeftPage(this.pages[t[0]]), this.render.setRightPage(this.pages[t[1]])) : "landscape" === this.render.getOrientation() && t[0] === this.pages.length - 1 ? (this.render.setLeftPage(this.pages[t[0]]), this.render.setRightPage(null)) : (this.render.setLeftPage(null), this.render.setRightPage(this.pages[t[0]])), this.currentPageIndex = t[0], this.app.updatePageIndex(this.currentPageIndex);
        }
    }
    class n extends s {
        constructor(t, e, i){
            super(t, e), this.imagesHref = i;
        }
        load() {
            for (const t of this.imagesHref){
                const e = new i(this.render, t, "soft");
                e.load(), this.pages.push(e);
            }
            this.createSpread();
        }
    }
    class h {
        static GetDistanceBetweenTwoPoint(t, e) {
            return null === t || null === e ? 1 / 0 : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }
        static GetSegmentLength(t) {
            return h.GetDistanceBetweenTwoPoint(t[0], t[1]);
        }
        static GetAngleBetweenTwoLine(t, e) {
            const i = t[0].y - t[1].y, s = e[0].y - e[1].y, n = t[1].x - t[0].x, h = e[1].x - e[0].x;
            return Math.acos((i * s + n * h) / (Math.sqrt(i * i + n * n) * Math.sqrt(s * s + h * h)));
        }
        static PointInRect(t, e) {
            return null === e ? null : e.x >= t.left && e.x <= t.width + t.left && e.y >= t.top && e.y <= t.top + t.height ? e : null;
        }
        static GetRotatedPoint(t, e, i) {
            return {
                x: t.x * Math.cos(i) + t.y * Math.sin(i) + e.x,
                y: t.y * Math.cos(i) - t.x * Math.sin(i) + e.y
            };
        }
        static LimitPointToCircle(t, e, i) {
            if (h.GetDistanceBetweenTwoPoint(t, i) <= e) return i;
            const s = t.x, n = t.y, r = i.x, o = i.y;
            let a = Math.sqrt(Math.pow(e, 2) * Math.pow(s - r, 2) / (Math.pow(s - r, 2) + Math.pow(n - o, 2))) + s;
            i.x < 0 && (a *= -1);
            let g = (a - s) * (n - o) / (s - r) + n;
            return s - r + n === 0 && (g = e), {
                x: a,
                y: g
            };
        }
        static GetIntersectBetweenTwoSegment(t, e, i) {
            return h.PointInRect(t, h.GetIntersectBeetwenTwoLine(e, i));
        }
        static GetIntersectBeetwenTwoLine(t, e) {
            const i = t[0].y - t[1].y, s = e[0].y - e[1].y, n = t[1].x - t[0].x, h = e[1].x - e[0].x, r = t[0].x * t[1].y - t[1].x * t[0].y, o = e[0].x * e[1].y - e[1].x * e[0].y, a = i * o - s * r, g = n * o - h * r, l = -(r * h - o * n) / (i * h - s * n), d = -(i * o - s * r) / (i * h - s * n);
            if (isFinite(l) && isFinite(d)) return {
                x: l,
                y: d
            };
            if (Math.abs(a - g) < .1) throw new Error("Segment included");
            return null;
        }
        static GetCordsFromTwoPoint(t, e) {
            const i = Math.abs(t.x - e.x), s = Math.abs(t.y - e.y), n = Math.max(i, s), h = [
                t
            ];
            function r(t, e, i, s, n) {
                return e > t ? t + n * (i / s) : e < t ? t - n * (i / s) : t;
            }
            for(let o = 1; o <= n; o += 1)h.push({
                x: r(t.x, e.x, i, n, o),
                y: r(t.y, e.y, s, n, o)
            });
            return h;
        }
    }
    class r extends e {
        constructor(t, e, i){
            super(t, i), this.copiedElement = null, this.temporaryCopy = null, this.isLoad = !1, this.element = e, this.element.classList.add("stf__item"), this.element.classList.add("--" + i);
        }
        newTemporaryCopy() {
            return "hard" === this.nowDrawingDensity ? this : (null === this.temporaryCopy && (this.copiedElement = this.element.cloneNode(!0), this.element.parentElement.appendChild(this.copiedElement), this.temporaryCopy = new r(this.render, this.copiedElement, this.nowDrawingDensity)), this.getTemporaryCopy());
        }
        getTemporaryCopy() {
            return this.temporaryCopy;
        }
        hideTemporaryCopy() {
            null !== this.temporaryCopy && (this.copiedElement.remove(), this.copiedElement = null, this.temporaryCopy = null);
        }
        draw(t) {
            const e = t || this.nowDrawingDensity, i = this.render.convertToGlobal(this.state.position), s = this.render.getRect().pageWidth, n = this.render.getRect().height;
            this.element.classList.remove("--simple");
            const h = `\n            display: block;\n            z-index: ${this.element.style.zIndex};\n            left: 0;\n            top: 0;\n            width: ${s}px;\n            height: ${n}px;\n        `;
            "hard" === e ? this.drawHard(h) : this.drawSoft(i, h);
        }
        drawHard(t = "") {
            const e = this.render.getRect().left + this.render.getRect().width / 2, i = this.state.hardDrawingAngle, s = t + "\n                backface-visibility: hidden;\n                -webkit-backface-visibility: hidden;\n                clip-path: none;\n                -webkit-clip-path: none;\n            " + (0 === this.orientation ? `transform-origin: ${this.render.getRect().pageWidth}px 0; \n                   transform: translate3d(0, 0, 0) rotateY(${i}deg);` : `transform-origin: 0 0; \n                   transform: translate3d(${e}px, 0, 0) rotateY(${i}deg);`);
            this.element.style.cssText = s;
        }
        drawSoft(t, e = "") {
            let i = "polygon( ";
            for (const t of this.state.area)if (null !== t) {
                let e = 1 === this.render.getDirection() ? {
                    x: -t.x + this.state.position.x,
                    y: t.y - this.state.position.y
                } : {
                    x: t.x - this.state.position.x,
                    y: t.y - this.state.position.y
                };
                e = h.GetRotatedPoint(e, {
                    x: 0,
                    y: 0
                }, this.state.angle), i += e.x + "px " + e.y + "px, ";
            }
            i = i.slice(0, -2), i += ")";
            const s = e + `transform-origin: 0 0; clip-path: ${i}; -webkit-clip-path: ${i};` + (this.render.isSafari() && 0 === this.state.angle ? `transform: translate(${t.x}px, ${t.y}px);` : `transform: translate3d(${t.x}px, ${t.y}px, 0) rotate(${this.state.angle}rad);`);
            this.element.style.cssText = s;
        }
        simpleDraw(t) {
            const e = this.render.getRect(), i = e.pageWidth, s = e.height, n = 1 === t ? e.left + e.pageWidth : e.left, h = e.top;
            this.element.classList.add("--simple"), this.element.style.cssText = `\n            position: absolute; \n            display: block; \n            height: ${s}px; \n            left: ${n}px; \n            top: ${h}px; \n            width: ${i}px; \n            z-index: ${this.render.getSettings().startZIndex + 1};`;
        }
        getElement() {
            return this.element;
        }
        load() {
            this.isLoad = !0;
        }
        setOrientation(t) {
            super.setOrientation(t), this.element.classList.remove("--left", "--right"), this.element.classList.add(1 === t ? "--right" : "--left");
        }
        setDrawingDensity(t) {
            this.element.classList.remove("--soft", "--hard"), this.element.classList.add("--" + t), super.setDrawingDensity(t);
        }
    }
    class o extends s {
        constructor(t, e, i, s){
            super(t, e), this.element = i, this.pagesElement = s;
        }
        load() {
            for (const t of this.pagesElement){
                const e = new r(this.render, t, "hard" === t.dataset.density ? "hard" : "soft");
                e.load(), this.pages.push(e);
            }
            this.createSpread();
        }
    }
    class a {
        constructor(t, e, i, s){
            this.direction = t, this.corner = e, this.topIntersectPoint = null, this.sideIntersectPoint = null, this.bottomIntersectPoint = null, this.pageWidth = parseInt(i, 10), this.pageHeight = parseInt(s, 10);
        }
        calc(t) {
            try {
                return this.position = this.calcAngleAndPosition(t), this.calculateIntersectPoint(this.position), !0;
            } catch (t) {
                return !1;
            }
        }
        getFlippingClipArea() {
            const t = [];
            let e = !1;
            return t.push(this.rect.topLeft), t.push(this.topIntersectPoint), null === this.sideIntersectPoint ? e = !0 : (t.push(this.sideIntersectPoint), null === this.bottomIntersectPoint && (e = !1)), t.push(this.bottomIntersectPoint), (e || "bottom" === this.corner) && t.push(this.rect.bottomLeft), t;
        }
        getBottomClipArea() {
            const t = [];
            return t.push(this.topIntersectPoint), "top" === this.corner ? t.push({
                x: this.pageWidth,
                y: 0
            }) : (null !== this.topIntersectPoint && t.push({
                x: this.pageWidth,
                y: 0
            }), t.push({
                x: this.pageWidth,
                y: this.pageHeight
            })), null !== this.sideIntersectPoint ? h.GetDistanceBetweenTwoPoint(this.sideIntersectPoint, this.topIntersectPoint) >= 10 && t.push(this.sideIntersectPoint) : "top" === this.corner && t.push({
                x: this.pageWidth,
                y: this.pageHeight
            }), t.push(this.bottomIntersectPoint), t.push(this.topIntersectPoint), t;
        }
        getAngle() {
            return 0 === this.direction ? -this.angle : this.angle;
        }
        getRect() {
            return this.rect;
        }
        getPosition() {
            return this.position;
        }
        getActiveCorner() {
            return 0 === this.direction ? this.rect.topLeft : this.rect.topRight;
        }
        getDirection() {
            return this.direction;
        }
        getFlippingProgress() {
            return Math.abs((this.position.x - this.pageWidth) / (2 * this.pageWidth) * 100);
        }
        getCorner() {
            return this.corner;
        }
        getBottomPagePosition() {
            return 1 === this.direction ? {
                x: this.pageWidth,
                y: 0
            } : {
                x: 0,
                y: 0
            };
        }
        getShadowStartPoint() {
            return "top" === this.corner ? this.topIntersectPoint : null !== this.sideIntersectPoint ? this.sideIntersectPoint : this.topIntersectPoint;
        }
        getShadowAngle() {
            const t = h.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(), [
                {
                    x: 0,
                    y: 0
                },
                {
                    x: this.pageWidth,
                    y: 0
                }
            ]);
            return 0 === this.direction ? t : Math.PI - t;
        }
        calcAngleAndPosition(t) {
            let e = t;
            if (this.updateAngleAndGeometry(e), e = "top" === this.corner ? this.checkPositionAtCenterLine(e, {
                x: 0,
                y: 0
            }, {
                x: 0,
                y: this.pageHeight
            }) : this.checkPositionAtCenterLine(e, {
                x: 0,
                y: this.pageHeight
            }, {
                x: 0,
                y: 0
            }), Math.abs(e.x - this.pageWidth) < 1 && Math.abs(e.y) < 1) throw new Error("Point is too small");
            return e;
        }
        updateAngleAndGeometry(t) {
            this.angle = this.calculateAngle(t), this.rect = this.getPageRect(t);
        }
        calculateAngle(t) {
            const e = this.pageWidth - t.x + 1, i = "bottom" === this.corner ? this.pageHeight - t.y : t.y;
            let s = 2 * Math.acos(e / Math.sqrt(i * i + e * e));
            i < 0 && (s = -s);
            const n = Math.PI - s;
            if (!isFinite(s) || n >= 0 && n < .003) throw new Error("The G point is too small");
            return "bottom" === this.corner && (s = -s), s;
        }
        getPageRect(t) {
            return "top" === this.corner ? this.getRectFromBasePoint([
                {
                    x: 0,
                    y: 0
                },
                {
                    x: this.pageWidth,
                    y: 0
                },
                {
                    x: 0,
                    y: this.pageHeight
                },
                {
                    x: this.pageWidth,
                    y: this.pageHeight
                }
            ], t) : this.getRectFromBasePoint([
                {
                    x: 0,
                    y: -this.pageHeight
                },
                {
                    x: this.pageWidth,
                    y: -this.pageHeight
                },
                {
                    x: 0,
                    y: 0
                },
                {
                    x: this.pageWidth,
                    y: 0
                }
            ], t);
        }
        getRectFromBasePoint(t, e) {
            return {
                topLeft: this.getRotatedPoint(t[0], e),
                topRight: this.getRotatedPoint(t[1], e),
                bottomLeft: this.getRotatedPoint(t[2], e),
                bottomRight: this.getRotatedPoint(t[3], e)
            };
        }
        getRotatedPoint(t, e) {
            return {
                x: t.x * Math.cos(this.angle) + t.y * Math.sin(this.angle) + e.x,
                y: t.y * Math.cos(this.angle) - t.x * Math.sin(this.angle) + e.y
            };
        }
        calculateIntersectPoint(t) {
            const e = {
                left: -1,
                top: -1,
                width: this.pageWidth + 2,
                height: this.pageHeight + 2
            };
            "top" === this.corner ? (this.topIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [
                t,
                this.rect.topRight
            ], [
                {
                    x: 0,
                    y: 0
                },
                {
                    x: this.pageWidth,
                    y: 0
                }
            ]), this.sideIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [
                t,
                this.rect.bottomLeft
            ], [
                {
                    x: this.pageWidth,
                    y: 0
                },
                {
                    x: this.pageWidth,
                    y: this.pageHeight
                }
            ]), this.bottomIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [
                this.rect.bottomLeft,
                this.rect.bottomRight
            ], [
                {
                    x: 0,
                    y: this.pageHeight
                },
                {
                    x: this.pageWidth,
                    y: this.pageHeight
                }
            ])) : (this.topIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [
                this.rect.topLeft,
                this.rect.topRight
            ], [
                {
                    x: 0,
                    y: 0
                },
                {
                    x: this.pageWidth,
                    y: 0
                }
            ]), this.sideIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [
                t,
                this.rect.topLeft
            ], [
                {
                    x: this.pageWidth,
                    y: 0
                },
                {
                    x: this.pageWidth,
                    y: this.pageHeight
                }
            ]), this.bottomIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [
                this.rect.bottomLeft,
                this.rect.bottomRight
            ], [
                {
                    x: 0,
                    y: this.pageHeight
                },
                {
                    x: this.pageWidth,
                    y: this.pageHeight
                }
            ]));
        }
        checkPositionAtCenterLine(t, e, i) {
            let s = t;
            const n = h.LimitPointToCircle(e, this.pageWidth, s);
            s !== n && (s = n, this.updateAngleAndGeometry(s));
            const r = Math.sqrt(Math.pow(this.pageWidth, 2) + Math.pow(this.pageHeight, 2));
            let o = this.rect.bottomRight, a = this.rect.topLeft;
            if ("bottom" === this.corner && (o = this.rect.topRight, a = this.rect.bottomLeft), o.x <= 0) {
                const t = h.LimitPointToCircle(i, r, a);
                t !== s && (s = t, this.updateAngleAndGeometry(s));
            }
            return s;
        }
        getSegmentToShadowLine() {
            const t = this.getShadowStartPoint();
            return [
                t,
                t !== this.sideIntersectPoint && null !== this.sideIntersectPoint ? this.sideIntersectPoint : this.bottomIntersectPoint
            ];
        }
    }
    class g {
        constructor(t, e){
            this.flippingPage = null, this.bottomPage = null, this.calc = null, this.state = "read", this.render = t, this.app = e;
        }
        fold(t) {
            this.setState("user_fold"), null === this.calc && this.start(t), this.do(this.render.convertToPage(t));
        }
        flip(t) {
            if (this.app.getSettings().disableFlipByClick && !this.isPointOnCorners(t)) return;
            if (null !== this.calc && this.render.finishAnimation(), !this.start(t)) return;
            const e = this.getBoundsRect();
            this.setState("flipping");
            const i = e.height / 10, s = "bottom" === this.calc.getCorner() ? e.height - i : i, n = "bottom" === this.calc.getCorner() ? e.height : 0;
            this.calc.calc({
                x: e.pageWidth - i,
                y: s
            }), this.animateFlippingTo({
                x: e.pageWidth - i,
                y: s
            }, {
                x: -e.pageWidth,
                y: n
            }, !0);
        }
        start(t) {
            this.reset();
            const e = this.render.convertToBook(t), i = this.getBoundsRect(), s = this.getDirectionByPoint(e), n = e.y >= i.height / 2 ? "bottom" : "top";
            if (!this.checkDirection(s)) return !1;
            try {
                if (this.flippingPage = this.app.getPageCollection().getFlippingPage(s), this.bottomPage = this.app.getPageCollection().getBottomPage(s), "landscape" === this.render.getOrientation()) if (1 === s) {
                    const t = this.app.getPageCollection().nextBy(this.flippingPage);
                    null !== t && this.flippingPage.getDensity() !== t.getDensity() && (this.flippingPage.setDrawingDensity("hard"), t.setDrawingDensity("hard"));
                } else {
                    const t = this.app.getPageCollection().prevBy(this.flippingPage);
                    null !== t && this.flippingPage.getDensity() !== t.getDensity() && (this.flippingPage.setDrawingDensity("hard"), t.setDrawingDensity("hard"));
                }
                return this.render.setDirection(s), this.calc = new a(s, n, i.pageWidth.toString(10), i.height.toString(10)), !0;
            } catch (t) {
                return !1;
            }
        }
        do(t) {
            if (null !== this.calc && this.calc.calc(t)) {
                const t = this.calc.getFlippingProgress();
                this.bottomPage.setArea(this.calc.getBottomClipArea()), this.bottomPage.setPosition(this.calc.getBottomPagePosition()), this.bottomPage.setAngle(0), this.bottomPage.setHardAngle(0), this.flippingPage.setArea(this.calc.getFlippingClipArea()), this.flippingPage.setPosition(this.calc.getActiveCorner()), this.flippingPage.setAngle(this.calc.getAngle()), 0 === this.calc.getDirection() ? this.flippingPage.setHardAngle(90 * (200 - 2 * t) / 100) : this.flippingPage.setHardAngle(-90 * (200 - 2 * t) / 100), this.render.setPageRect(this.calc.getRect()), this.render.setBottomPage(this.bottomPage), this.render.setFlippingPage(this.flippingPage), this.render.setShadowData(this.calc.getShadowStartPoint(), this.calc.getShadowAngle(), t, this.calc.getDirection());
            }
        }
        flipToPage(t, e) {
            const i = this.app.getPageCollection().getCurrentSpreadIndex(), s = this.app.getPageCollection().getSpreadIndexByPage(t);
            try {
                s > i && (this.app.getPageCollection().setCurrentSpreadIndex(s - 1), this.flipNext(e)), s < i && (this.app.getPageCollection().setCurrentSpreadIndex(s + 1), this.flipPrev(e));
            } catch (t) {}
        }
        flipNext(t) {
            this.flip({
                x: this.render.getRect().left + 2 * this.render.getRect().pageWidth - 10,
                y: "top" === t ? 1 : this.render.getRect().height - 2
            });
        }
        flipPrev(t) {
            this.flip({
                x: 10,
                y: "top" === t ? 1 : this.render.getRect().height - 2
            });
        }
        stopMove() {
            if (null === this.calc) return;
            const t = this.calc.getPosition(), e = this.getBoundsRect(), i = "bottom" === this.calc.getCorner() ? e.height : 0;
            t.x <= 0 ? this.animateFlippingTo(t, {
                x: -e.pageWidth,
                y: i
            }, !0) : this.animateFlippingTo(t, {
                x: e.pageWidth,
                y: i
            }, !1);
        }
        showCorner(t) {
            if (!this.checkState("read", "fold_corner")) return;
            const e = this.getBoundsRect(), i = e.pageWidth;
            if (this.isPointOnCorners(t)) if (null === this.calc) {
                if (!this.start(t)) return;
                this.setState("fold_corner"), this.calc.calc({
                    x: i - 1,
                    y: 1
                });
                const s = 50, n = "bottom" === this.calc.getCorner() ? e.height - 1 : 1, h = "bottom" === this.calc.getCorner() ? e.height - s : s;
                this.animateFlippingTo({
                    x: i - 1,
                    y: n
                }, {
                    x: i - s,
                    y: h
                }, !1, !1);
            } else this.do(this.render.convertToPage(t));
            else this.setState("read"), this.render.finishAnimation(), this.stopMove();
        }
        animateFlippingTo(t, e, i, s = !0) {
            const n = h.GetCordsFromTwoPoint(t, e), r = [];
            for (const t of n)r.push(()=>this.do(t));
            const o = this.getAnimationDuration(n.length);
            this.render.startAnimation(r, o, ()=>{
                this.calc && (i && (1 === this.calc.getDirection() ? this.app.turnToPrevPage() : this.app.turnToNextPage()), s && (this.render.setBottomPage(null), this.render.setFlippingPage(null), this.render.clearShadow(), this.setState("read"), this.reset()));
            });
        }
        getCalculation() {
            return this.calc;
        }
        getState() {
            return this.state;
        }
        setState(t) {
            this.state !== t && (this.app.updateState(t), this.state = t);
        }
        getDirectionByPoint(t) {
            const e = this.getBoundsRect();
            if ("portrait" === this.render.getOrientation()) {
                if (t.x - e.pageWidth <= e.width / 5) return 1;
            } else if (t.x < e.width / 2) return 1;
            return 0;
        }
        getAnimationDuration(t) {
            const e = this.app.getSettings().flippingTime;
            return t >= 1e3 ? e : t / 1e3 * e;
        }
        checkDirection(t) {
            return 0 === t ? this.app.getCurrentPageIndex() < this.app.getPageCount() - 1 : this.app.getCurrentPageIndex() >= 1;
        }
        reset() {
            this.calc = null, this.flippingPage = null, this.bottomPage = null;
        }
        getBoundsRect() {
            return this.render.getRect();
        }
        checkState(...t) {
            for (const e of t)if (this.state === e) return !0;
            return !1;
        }
        isPointOnCorners(t) {
            const e = this.getBoundsRect(), i = e.pageWidth, s = Math.sqrt(Math.pow(i, 2) + Math.pow(e.height, 2)) / 5, n = this.render.convertToBook(t);
            return n.x > 0 && n.y > 0 && n.x < e.width && n.y < e.height && (n.x < s || n.x > e.width - s) && (n.y < s || n.y > e.height - s);
        }
    }
    class l {
        constructor(t, e){
            this.leftPage = null, this.rightPage = null, this.flippingPage = null, this.bottomPage = null, this.direction = null, this.orientation = null, this.shadow = null, this.animation = null, this.pageRect = null, this.boundsRect = null, this.timer = 0, this.safari = !1, this.setting = e, this.app = t;
            const i = new RegExp("Version\\/[\\d\\.]+.*Safari/");
            this.safari = null !== i.exec(window.navigator.userAgent);
        }
        render(t) {
            if (null !== this.animation) {
                const e = Math.round((t - this.animation.startedAt) / this.animation.durationFrame);
                e < this.animation.frames.length ? this.animation.frames[e]() : (this.animation.onAnimateEnd(), this.animation = null);
            }
            this.timer = t, this.drawFrame();
        }
        start() {
            this.update();
            const t = (e)=>{
                this.render(e), requestAnimationFrame(t);
            };
            requestAnimationFrame(t);
        }
        startAnimation(t, e, i) {
            this.finishAnimation(), this.animation = {
                frames: t,
                duration: e,
                durationFrame: e / t.length,
                onAnimateEnd: i,
                startedAt: this.timer
            };
        }
        finishAnimation() {
            null !== this.animation && (this.animation.frames[this.animation.frames.length - 1](), null !== this.animation.onAnimateEnd && this.animation.onAnimateEnd()), this.animation = null;
        }
        update() {
            this.boundsRect = null;
            const t = this.calculateBoundsRect();
            this.orientation !== t && (this.orientation = t, this.app.updateOrientation(t));
        }
        calculateBoundsRect() {
            let t = "landscape";
            const e = this.getBlockWidth(), i = e / 2, s = this.getBlockHeight() / 2, n = this.setting.width / this.setting.height;
            let h = this.setting.width, r = this.setting.height, o = i - h;
            return "stretch" === this.setting.size ? (e < 2 * this.setting.minWidth && this.app.getSettings().usePortrait && (t = "portrait"), h = "portrait" === t ? this.getBlockWidth() : this.getBlockWidth() / 2, h > this.setting.maxWidth && (h = this.setting.maxWidth), r = h / n, r > this.getBlockHeight() && (r = this.getBlockHeight(), h = r * n), o = "portrait" === t ? i - h / 2 - h : i - h) : e < 2 * h && this.app.getSettings().usePortrait && (t = "portrait", o = i - h / 2 - h), this.boundsRect = {
                left: o,
                top: s - r / 2,
                width: 2 * h,
                height: r,
                pageWidth: h
            }, t;
        }
        setShadowData(t, e, i, s) {
            if (!this.app.getSettings().drawShadow) return;
            const n = 100 * this.getSettings().maxShadowOpacity;
            this.shadow = {
                pos: t,
                angle: e,
                width: 3 * this.getRect().pageWidth / 4 * i / 100,
                opacity: (100 - i) * n / 100 / 100,
                direction: s,
                progress: 2 * i
            };
        }
        clearShadow() {
            this.shadow = null;
        }
        getBlockWidth() {
            return this.app.getUI().getDistElement().offsetWidth;
        }
        getBlockHeight() {
            return this.app.getUI().getDistElement().offsetHeight;
        }
        getDirection() {
            return this.direction;
        }
        getRect() {
            return null === this.boundsRect && this.calculateBoundsRect(), this.boundsRect;
        }
        getSettings() {
            return this.app.getSettings();
        }
        getOrientation() {
            return this.orientation;
        }
        setPageRect(t) {
            this.pageRect = t;
        }
        setDirection(t) {
            this.direction = t;
        }
        setRightPage(t) {
            null !== t && t.setOrientation(1), this.rightPage = t;
        }
        setLeftPage(t) {
            null !== t && t.setOrientation(0), this.leftPage = t;
        }
        setBottomPage(t) {
            null !== t && t.setOrientation(1 === this.direction ? 0 : 1), this.bottomPage = t;
        }
        setFlippingPage(t) {
            null !== t && t.setOrientation(0 === this.direction && "portrait" !== this.orientation ? 0 : 1), this.flippingPage = t;
        }
        convertToBook(t) {
            const e = this.getRect();
            return {
                x: t.x - e.left,
                y: t.y - e.top
            };
        }
        isSafari() {
            return this.safari;
        }
        convertToPage(t, e) {
            e || (e = this.direction);
            const i = this.getRect();
            return {
                x: 0 === e ? t.x - i.left - i.width / 2 : i.width / 2 - t.x + i.left,
                y: t.y - i.top
            };
        }
        convertToGlobal(t, e) {
            if (e || (e = this.direction), null == t) return null;
            const i = this.getRect();
            return {
                x: 0 === e ? t.x + i.left + i.width / 2 : i.width / 2 - t.x + i.left,
                y: t.y + i.top
            };
        }
        convertRectToGlobal(t, e) {
            return e || (e = this.direction), {
                topLeft: this.convertToGlobal(t.topLeft, e),
                topRight: this.convertToGlobal(t.topRight, e),
                bottomLeft: this.convertToGlobal(t.bottomLeft, e),
                bottomRight: this.convertToGlobal(t.bottomRight, e)
            };
        }
    }
    class d extends l {
        constructor(t, e, i){
            super(t, e), this.canvas = i, this.ctx = i.getContext("2d");
        }
        getContext() {
            return this.ctx;
        }
        reload() {}
        drawFrame() {
            this.clear(), "portrait" !== this.orientation && null != this.leftPage && this.leftPage.simpleDraw(0), null != this.rightPage && this.rightPage.simpleDraw(1), null != this.bottomPage && this.bottomPage.draw(), this.drawBookShadow(), null != this.flippingPage && this.flippingPage.draw(), null != this.shadow && (this.drawOuterShadow(), this.drawInnerShadow());
            const t = this.getRect();
            "portrait" === this.orientation && (this.ctx.beginPath(), this.ctx.rect(t.left + t.pageWidth, t.top, t.width, t.height), this.ctx.clip());
        }
        drawBookShadow() {
            const t = this.getRect();
            this.ctx.save(), this.ctx.beginPath();
            const e = t.width / 20;
            this.ctx.rect(t.left, t.top, t.width, t.height);
            const i = {
                x: t.left + t.width / 2 - e / 2,
                y: 0
            };
            this.ctx.translate(i.x, i.y);
            const s = this.ctx.createLinearGradient(0, 0, e, 0);
            s.addColorStop(0, "rgba(0, 0, 0, 0)"), s.addColorStop(.4, "rgba(0, 0, 0, 0.2)"), s.addColorStop(.49, "rgba(0, 0, 0, 0.1)"), s.addColorStop(.5, "rgba(0, 0, 0, 0.5)"), s.addColorStop(.51, "rgba(0, 0, 0, 0.4)"), s.addColorStop(1, "rgba(0, 0, 0, 0)"), this.ctx.clip(), this.ctx.fillStyle = s, this.ctx.fillRect(0, 0, e, 2 * t.height), this.ctx.restore();
        }
        drawOuterShadow() {
            const t = this.getRect();
            this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(t.left, t.top, t.width, t.height);
            const e = this.convertToGlobal({
                x: this.shadow.pos.x,
                y: this.shadow.pos.y
            });
            this.ctx.translate(e.x, e.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
            const i = this.ctx.createLinearGradient(0, 0, this.shadow.width, 0);
            0 === this.shadow.direction ? (this.ctx.translate(0, -100), i.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), i.addColorStop(1, "rgba(0, 0, 0, 0)")) : (this.ctx.translate(-this.shadow.width, -100), i.addColorStop(0, "rgba(0, 0, 0, 0)"), i.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")")), this.ctx.clip(), this.ctx.fillStyle = i, this.ctx.fillRect(0, 0, this.shadow.width, 2 * t.height), this.ctx.restore();
        }
        drawInnerShadow() {
            const t = this.getRect();
            this.ctx.save(), this.ctx.beginPath();
            const e = this.convertToGlobal({
                x: this.shadow.pos.x,
                y: this.shadow.pos.y
            }), i = this.convertRectToGlobal(this.pageRect);
            this.ctx.moveTo(i.topLeft.x, i.topLeft.y), this.ctx.lineTo(i.topRight.x, i.topRight.y), this.ctx.lineTo(i.bottomRight.x, i.bottomRight.y), this.ctx.lineTo(i.bottomLeft.x, i.bottomLeft.y), this.ctx.translate(e.x, e.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
            const s = 3 * this.shadow.width / 4, n = this.ctx.createLinearGradient(0, 0, s, 0);
            0 === this.shadow.direction ? (this.ctx.translate(-s, -100), n.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n.addColorStop(.9, "rgba(0, 0, 0, 0.05)"), n.addColorStop(.7, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n.addColorStop(0, "rgba(0, 0, 0, 0)")) : (this.ctx.translate(0, -100), n.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n.addColorStop(.1, "rgba(0, 0, 0, 0.05)"), n.addColorStop(.3, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n.addColorStop(1, "rgba(0, 0, 0, 0)")), this.ctx.clip(), this.ctx.fillStyle = n, this.ctx.fillRect(0, 0, s, 2 * t.height), this.ctx.restore();
        }
        clear() {
            this.ctx.fillStyle = "white", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
    class p {
        constructor(t, e, i){
            this.touchPoint = null, this.swipeTimeout = 250, this.onResize = ()=>{
                this.update();
            }, this.onMouseDown = (t)=>{
                if (this.checkTarget(t.target)) {
                    const e = this.getMousePos(t.clientX, t.clientY);
                    this.app.startUserTouch(e), t.preventDefault();
                }
            }, this.onTouchStart = (t)=>{
                if (this.checkTarget(t.target) && t.changedTouches.length > 0) {
                    const e = t.changedTouches[0], i = this.getMousePos(e.clientX, e.clientY);
                    this.touchPoint = {
                        point: i,
                        time: Date.now()
                    }, setTimeout(()=>{
                        null !== this.touchPoint && this.app.startUserTouch(i);
                    }, this.swipeTimeout), this.app.getSettings().mobileScrollSupport || t.preventDefault();
                }
            }, this.onMouseUp = (t)=>{
                const e = this.getMousePos(t.clientX, t.clientY);
                this.app.userStop(e);
            }, this.onMouseMove = (t)=>{
                const e = this.getMousePos(t.clientX, t.clientY);
                this.app.userMove(e, !1);
            }, this.onTouchMove = (t)=>{
                if (t.changedTouches.length > 0) {
                    const e = t.changedTouches[0], i = this.getMousePos(e.clientX, e.clientY);
                    this.app.getSettings().mobileScrollSupport ? (null !== this.touchPoint && (Math.abs(this.touchPoint.point.x - i.x) > 10 || "read" !== this.app.getState()) && t.cancelable && this.app.userMove(i, !0), "read" !== this.app.getState() && t.preventDefault()) : this.app.userMove(i, !0);
                }
            }, this.onTouchEnd = (t)=>{
                if (t.changedTouches.length > 0) {
                    const e = t.changedTouches[0], i = this.getMousePos(e.clientX, e.clientY);
                    let s = !1;
                    if (null !== this.touchPoint) {
                        const t = i.x - this.touchPoint.point.x, e = Math.abs(i.y - this.touchPoint.point.y);
                        Math.abs(t) > this.swipeDistance && e < 2 * this.swipeDistance && Date.now() - this.touchPoint.time < this.swipeTimeout && (t > 0 ? this.app.flipPrev(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? "top" : "bottom") : this.app.flipNext(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? "top" : "bottom"), s = !0), this.touchPoint = null;
                    }
                    this.app.userStop(i, s);
                }
            }, this.parentElement = t, t.classList.add("stf__parent"), t.insertAdjacentHTML("afterbegin", '<div class="stf__wrapper"></div>'), this.wrapper = t.querySelector(".stf__wrapper"), this.app = e;
            const s = this.app.getSettings().usePortrait ? 1 : 2;
            t.style.minWidth = i.minWidth * s + "px", t.style.minHeight = i.minHeight + "px", "fixed" === i.size && (t.style.minWidth = i.width * s + "px", t.style.minHeight = i.height + "px"), i.autoSize && (t.style.width = "100%", t.style.maxWidth = 2 * i.maxWidth + "px"), t.style.display = "block", window.addEventListener("resize", this.onResize, !1), this.swipeDistance = i.swipeDistance;
        }
        destroy() {
            this.app.getSettings().useMouseEvents && this.removeHandlers(), this.distElement.remove(), this.wrapper.remove();
        }
        getDistElement() {
            return this.distElement;
        }
        getWrapper() {
            return this.wrapper;
        }
        setOrientationStyle(t) {
            this.wrapper.classList.remove("--portrait", "--landscape"), "portrait" === t ? (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = this.app.getSettings().height / this.app.getSettings().width * 100 + "%"), this.wrapper.classList.add("--portrait")) : (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = this.app.getSettings().height / (2 * this.app.getSettings().width) * 100 + "%"), this.wrapper.classList.add("--landscape")), this.update();
        }
        removeHandlers() {
            window.removeEventListener("resize", this.onResize), this.distElement.removeEventListener("mousedown", this.onMouseDown), this.distElement.removeEventListener("touchstart", this.onTouchStart), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("touchend", this.onTouchEnd);
        }
        setHandlers() {
            window.addEventListener("resize", this.onResize, !1), this.app.getSettings().useMouseEvents && (this.distElement.addEventListener("mousedown", this.onMouseDown), this.distElement.addEventListener("touchstart", this.onTouchStart), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, {
                passive: !this.app.getSettings().mobileScrollSupport
            }), window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("touchend", this.onTouchEnd));
        }
        getMousePos(t, e) {
            const i = this.distElement.getBoundingClientRect();
            return {
                x: t - i.left,
                y: e - i.top
            };
        }
        checkTarget(t) {
            return !this.app.getSettings().clickEventForward || ![
                "a",
                "button"
            ].includes(t.tagName.toLowerCase());
        }
    }
    class c extends p {
        constructor(t, e, i, s){
            super(t, e, i), this.wrapper.insertAdjacentHTML("afterbegin", '<div class="stf__block"></div>'), this.distElement = t.querySelector(".stf__block"), this.items = s;
            for (const t of s)this.distElement.appendChild(t);
            this.setHandlers();
        }
        clear() {
            for (const t of this.items)this.parentElement.appendChild(t);
        }
        updateItems(t) {
            this.removeHandlers(), this.distElement.innerHTML = "";
            for (const e of t)this.distElement.appendChild(e);
            this.items = t, this.setHandlers();
        }
        update() {
            this.app.getRender().update();
        }
    }
    class u extends p {
        constructor(t, e, i){
            super(t, e, i), this.wrapper.innerHTML = '<canvas class="stf__canvas"></canvas>', this.canvas = t.querySelectorAll("canvas")[0], this.distElement = this.canvas, this.resizeCanvas(), this.setHandlers();
        }
        resizeCanvas() {
            const t = getComputedStyle(this.canvas), e = parseInt(t.getPropertyValue("width"), 10), i = parseInt(t.getPropertyValue("height"), 10);
            this.canvas.width = e, this.canvas.height = i;
        }
        getCanvas() {
            return this.canvas;
        }
        update() {
            this.resizeCanvas(), this.app.getRender().update();
        }
    }
    class w extends l {
        constructor(t, e, i){
            super(t, e), this.outerShadow = null, this.innerShadow = null, this.hardShadow = null, this.hardInnerShadow = null, this.element = i, this.createShadows();
        }
        createShadows() {
            this.element.insertAdjacentHTML("beforeend", '<div class="stf__outerShadow"></div>\n             <div class="stf__innerShadow"></div>\n             <div class="stf__hardShadow"></div>\n             <div class="stf__hardInnerShadow"></div>'), this.outerShadow = this.element.querySelector(".stf__outerShadow"), this.innerShadow = this.element.querySelector(".stf__innerShadow"), this.hardShadow = this.element.querySelector(".stf__hardShadow"), this.hardInnerShadow = this.element.querySelector(".stf__hardInnerShadow");
        }
        clearShadow() {
            super.clearShadow(), this.outerShadow.style.cssText = "display: none", this.innerShadow.style.cssText = "display: none", this.hardShadow.style.cssText = "display: none", this.hardInnerShadow.style.cssText = "display: none";
        }
        reload() {
            this.element.querySelector(".stf__outerShadow") || this.createShadows();
        }
        drawHardInnerShadow() {
            const t = this.getRect(), e = this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress;
            let i = (100 - e) * (2.5 * t.pageWidth) / 100 + 20;
            i > t.pageWidth && (i = t.pageWidth);
            let s = `\n            display: block;\n            z-index: ${(this.getSettings().startZIndex + 5).toString(10)};\n            width: ${i}px;\n            height: ${t.height}px;\n            background: linear-gradient(to right,\n                rgba(0, 0, 0, ${this.shadow.opacity * e / 100}) 5%,\n                rgba(0, 0, 0, 0) 100%);\n            left: ${t.left + t.width / 2}px;\n            transform-origin: 0 0;\n        `;
            s += 0 === this.getDirection() && this.shadow.progress > 100 || 1 === this.getDirection() && this.shadow.progress <= 100 ? "transform: translate3d(0, 0, 0);" : "transform: translate3d(0, 0, 0) rotateY(180deg);", this.hardInnerShadow.style.cssText = s;
        }
        drawHardOuterShadow() {
            const t = this.getRect();
            let e = (100 - (this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress)) * (2.5 * t.pageWidth) / 100 + 20;
            e > t.pageWidth && (e = t.pageWidth);
            let i = `\n            display: block;\n            z-index: ${(this.getSettings().startZIndex + 4).toString(10)};\n            width: ${e}px;\n            height: ${t.height}px;\n            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);\n            left: ${t.left + t.width / 2}px;\n            transform-origin: 0 0;\n        `;
            i += 0 === this.getDirection() && this.shadow.progress > 100 || 1 === this.getDirection() && this.shadow.progress <= 100 ? "transform: translate3d(0, 0, 0) rotateY(180deg);" : "transform: translate3d(0, 0, 0);", this.hardShadow.style.cssText = i;
        }
        drawInnerShadow() {
            const t = this.getRect(), e = 3 * this.shadow.width / 4, i = 0 === this.getDirection() ? e : 0, s = 0 === this.getDirection() ? "to left" : "to right", n = this.convertToGlobal(this.shadow.pos), r = this.shadow.angle + 3 * Math.PI / 2, o = [
                this.pageRect.topLeft,
                this.pageRect.topRight,
                this.pageRect.bottomRight,
                this.pageRect.bottomLeft
            ];
            let a = "polygon( ";
            for (const t of o){
                let e = 1 === this.getDirection() ? {
                    x: -t.x + this.shadow.pos.x,
                    y: t.y - this.shadow.pos.y
                } : {
                    x: t.x - this.shadow.pos.x,
                    y: t.y - this.shadow.pos.y
                };
                e = h.GetRotatedPoint(e, {
                    x: i,
                    y: 100
                }, r), a += e.x + "px " + e.y + "px, ";
            }
            a = a.slice(0, -2), a += ")";
            const g = `\n            display: block;\n            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};\n            width: ${e}px;\n            height: ${2 * t.height}px;\n            background: linear-gradient(${s},\n                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,\n                rgba(0, 0, 0, 0.05) 15%,\n                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,\n                rgba(0, 0, 0, 0) 100%);\n            transform-origin: ${i}px 100px;\n            transform: translate3d(${n.x - i}px, ${n.y - 100}px, 0) rotate(${r}rad);\n            clip-path: ${a};\n            -webkit-clip-path: ${a};\n        `;
            this.innerShadow.style.cssText = g;
        }
        drawOuterShadow() {
            const t = this.getRect(), e = this.convertToGlobal({
                x: this.shadow.pos.x,
                y: this.shadow.pos.y
            }), i = this.shadow.angle + 3 * Math.PI / 2, s = 1 === this.getDirection() ? this.shadow.width : 0, n = 0 === this.getDirection() ? "to right" : "to left", r = [
                {
                    x: 0,
                    y: 0
                },
                {
                    x: t.pageWidth,
                    y: 0
                },
                {
                    x: t.pageWidth,
                    y: t.height
                },
                {
                    x: 0,
                    y: t.height
                }
            ];
            let o = "polygon( ";
            for (const t of r)if (null !== t) {
                let e = 1 === this.getDirection() ? {
                    x: -t.x + this.shadow.pos.x,
                    y: t.y - this.shadow.pos.y
                } : {
                    x: t.x - this.shadow.pos.x,
                    y: t.y - this.shadow.pos.y
                };
                e = h.GetRotatedPoint(e, {
                    x: s,
                    y: 100
                }, i), o += e.x + "px " + e.y + "px, ";
            }
            o = o.slice(0, -2), o += ")";
            const a = `\n            display: block;\n            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};\n            width: ${this.shadow.width}px;\n            height: ${2 * t.height}px;\n            background: linear-gradient(${n}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));\n            transform-origin: ${s}px 100px;\n            transform: translate3d(${e.x - s}px, ${e.y - 100}px, 0) rotate(${i}rad);\n            clip-path: ${o};\n            -webkit-clip-path: ${o};\n        `;
            this.outerShadow.style.cssText = a;
        }
        drawLeftPage() {
            "portrait" !== this.orientation && null !== this.leftPage && (1 === this.direction && null !== this.flippingPage && "hard" === this.flippingPage.getDrawingDensity() ? (this.leftPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.leftPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.leftPage.draw(this.flippingPage.getDrawingDensity())) : this.leftPage.simpleDraw(0));
        }
        drawRightPage() {
            null !== this.rightPage && (0 === this.direction && null !== this.flippingPage && "hard" === this.flippingPage.getDrawingDensity() ? (this.rightPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.rightPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.rightPage.draw(this.flippingPage.getDrawingDensity())) : this.rightPage.simpleDraw(1));
        }
        drawBottomPage() {
            if (null === this.bottomPage) return;
            const t = null != this.flippingPage ? this.flippingPage.getDrawingDensity() : null;
            "portrait" === this.orientation && 1 === this.direction || (this.bottomPage.getElement().style.zIndex = (this.getSettings().startZIndex + 3).toString(10), this.bottomPage.draw(t));
        }
        drawFrame() {
            this.clear(), this.drawLeftPage(), this.drawRightPage(), this.drawBottomPage(), null != this.flippingPage && (this.flippingPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.flippingPage.draw()), null != this.shadow && null !== this.flippingPage && ("soft" === this.flippingPage.getDrawingDensity() ? (this.drawOuterShadow(), this.drawInnerShadow()) : (this.drawHardOuterShadow(), this.drawHardInnerShadow()));
        }
        clear() {
            for (const t of this.app.getPageCollection().getPages())t !== this.leftPage && t !== this.rightPage && t !== this.flippingPage && t !== this.bottomPage && (t.getElement().style.cssText = "display: none"), t.getTemporaryCopy() !== this.flippingPage && t.hideTemporaryCopy();
        }
        update() {
            super.update(), null !== this.rightPage && this.rightPage.setOrientation(1), null !== this.leftPage && this.leftPage.setOrientation(0);
        }
    }
    class x {
        constructor(){
            this._default = {
                startPage: 0,
                size: "fixed",
                width: 0,
                height: 0,
                minWidth: 0,
                maxWidth: 0,
                minHeight: 0,
                maxHeight: 0,
                drawShadow: !0,
                flippingTime: 1e3,
                usePortrait: !0,
                startZIndex: 0,
                autoSize: !0,
                maxShadowOpacity: 1,
                showCover: !1,
                mobileScrollSupport: !0,
                swipeDistance: 30,
                clickEventForward: !0,
                useMouseEvents: !0,
                showPageCorners: !0,
                disableFlipByClick: !1
            };
        }
        getSettings(t) {
            const e = this._default;
            if (Object.assign(e, t), "stretch" !== e.size && "fixed" !== e.size) throw new Error('Invalid size type. Available only "fixed" and "stretch" value');
            if (e.width <= 0 || e.height <= 0) throw new Error("Invalid width or height");
            if (e.flippingTime <= 0) throw new Error("Invalid flipping time");
            return "stretch" === e.size ? (e.minWidth <= 0 && (e.minWidth = 100), e.maxWidth < e.minWidth && (e.maxWidth = 2e3), e.minHeight <= 0 && (e.minHeight = 100), e.maxHeight < e.minHeight && (e.maxHeight = 2e3)) : (e.minWidth = e.width, e.maxWidth = e.width, e.minHeight = e.height, e.maxHeight = e.height), e;
        }
    }
    !function(t, e) {
        void 0 === e && (e = {});
        var i = e.insertAt;
        if (t && "undefined" != typeof document) {
            var s = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
            n.type = "text/css", "top" === i && s.firstChild ? s.insertBefore(n, s.firstChild) : s.appendChild(n), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t));
        }
    }(".stf__parent {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  transform: translateZ(0);\n\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n\n.sft__wrapper {\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.stf__parent canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.stf__block {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  perspective: 2000px;\n}\n\n.stf__item {\n  display: none;\n  position: absolute;\n  transform-style: preserve-3d;\n}\n\n.stf__outerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__innerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__hardShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__hardInnerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}");
    t.PageFlip = class extends class {
        constructor(){
            this.events = new Map;
        }
        on(t, e) {
            return this.events.has(t) ? this.events.get(t).push(e) : this.events.set(t, [
                e
            ]), this;
        }
        off(t) {
            this.events.delete(t);
        }
        trigger(t, e, i = null) {
            if (this.events.has(t)) for (const s of this.events.get(t))s({
                data: i,
                object: e
            });
        }
    } {
        constructor(t, e){
            super(), this.isUserTouch = !1, this.isUserMove = !1, this.setting = null, this.pages = null, this.setting = (new x).getSettings(e), this.block = t;
        }
        destroy() {
            this.ui.destroy(), this.block.remove();
        }
        update() {
            this.render.update(), this.pages.show();
        }
        loadFromImages(t) {
            this.ui = new u(this.block, this, this.setting);
            const e = this.ui.getCanvas();
            this.render = new d(this, this.setting, e), this.flipController = new g(this.render, this), this.pages = new n(this, this.render, t), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(()=>{
                this.ui.update(), this.trigger("init", this, {
                    page: this.setting.startPage,
                    mode: this.render.getOrientation()
                });
            }, 1);
        }
        loadFromHTML(t) {
            this.ui = new c(this.block, this, this.setting, t), this.render = new w(this, this.setting, this.ui.getDistElement()), this.flipController = new g(this.render, this), this.pages = new o(this, this.render, this.ui.getDistElement(), t), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(()=>{
                this.ui.update(), this.trigger("init", this, {
                    page: this.setting.startPage,
                    mode: this.render.getOrientation()
                });
            }, 1);
        }
        updateFromImages(t) {
            const e = this.pages.getCurrentPageIndex();
            this.pages.destroy(), this.pages = new n(this, this.render, t), this.pages.load(), this.pages.show(e), this.trigger("update", this, {
                page: e,
                mode: this.render.getOrientation()
            });
        }
        updateFromHtml(t) {
            const e = this.pages.getCurrentPageIndex();
            this.pages.destroy(), this.pages = new o(this, this.render, this.ui.getDistElement(), t), this.pages.load(), this.ui.updateItems(t), this.render.reload(), this.pages.show(e), this.trigger("update", this, {
                page: e,
                mode: this.render.getOrientation()
            });
        }
        clear() {
            this.pages.destroy(), this.ui.clear();
        }
        turnToPrevPage() {
            this.pages.showPrev();
        }
        turnToNextPage() {
            this.pages.showNext();
        }
        turnToPage(t) {
            this.pages.show(t);
        }
        flipNext(t = "top") {
            this.flipController.flipNext(t);
        }
        flipPrev(t = "top") {
            this.flipController.flipPrev(t);
        }
        flip(t, e = "top") {
            this.flipController.flipToPage(t, e);
        }
        updateState(t) {
            this.trigger("changeState", this, t);
        }
        updatePageIndex(t) {
            this.trigger("flip", this, t);
        }
        updateOrientation(t) {
            this.ui.setOrientationStyle(t), this.update(), this.trigger("changeOrientation", this, t);
        }
        getPageCount() {
            return this.pages.getPageCount();
        }
        getCurrentPageIndex() {
            return this.pages.getCurrentPageIndex();
        }
        getPage(t) {
            return this.pages.getPage(t);
        }
        getRender() {
            return this.render;
        }
        getFlipController() {
            return this.flipController;
        }
        getOrientation() {
            return this.render.getOrientation();
        }
        getBoundsRect() {
            return this.render.getRect();
        }
        getSettings() {
            return this.setting;
        }
        getUI() {
            return this.ui;
        }
        getState() {
            return this.flipController.getState();
        }
        getPageCollection() {
            return this.pages;
        }
        startUserTouch(t) {
            this.mousePosition = t, this.isUserTouch = !0, this.isUserMove = !1;
        }
        userMove(t, e) {
            this.isUserTouch || e || !this.setting.showPageCorners ? this.isUserTouch && h.GetDistanceBetweenTwoPoint(this.mousePosition, t) > 5 && (this.isUserMove = !0, this.flipController.fold(t)) : this.flipController.showCorner(t);
        }
        userStop(t, e = !1) {
            this.isUserTouch && (this.isUserTouch = !1, e || (this.isUserMove ? this.flipController.stopMove() : this.flipController.flip(t)));
        }
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    });
});
}),
"[project]/Desktop/galaxybook26/node_modules/react-pageflip/build/index.es.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$page$2d$flip$2f$dist$2f$js$2f$page$2d$flip$2e$browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/galaxybook26/node_modules/page-flip/dist/js/page-flip.browser.js [app-ssr] (ecmascript)");
;
;
const HTMLFlipBookForward = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const htmlElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const childRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pageFlip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [pages, setPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>({
            pageFlip: ()=>pageFlip.current
        }));
    const refreshOnPageDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (pageFlip.current) {
            pageFlip.current.clear();
        }
    }, []);
    const removeHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const flip = pageFlip.current;
        if (flip) {
            flip.off('flip');
            flip.off('changeOrientation');
            flip.off('changeState');
            flip.off('init');
            flip.off('update');
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        childRef.current = [];
        if (props.children) {
            const childList = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.map(props.children, (child)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
                    ref: (dom)=>{
                        if (dom) {
                            childRef.current.push(dom);
                        }
                    }
                });
            });
            if (!props.renderOnlyPageLengthChange || pages.length !== childList.length) {
                if (childList.length < pages.length) {
                    refreshOnPageDelete();
                }
                setPages(childList);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.children
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const setHandlers = ()=>{
            const flip = pageFlip.current;
            if (flip) {
                if (props.onFlip) {
                    flip.on('flip', (e)=>props.onFlip(e));
                }
                if (props.onChangeOrientation) {
                    flip.on('changeOrientation', (e)=>props.onChangeOrientation(e));
                }
                if (props.onChangeState) {
                    flip.on('changeState', (e)=>props.onChangeState(e));
                }
                if (props.onInit) {
                    flip.on('init', (e)=>props.onInit(e));
                }
                if (props.onUpdate) {
                    flip.on('update', (e)=>props.onUpdate(e));
                }
            }
        };
        if (pages.length > 0 && childRef.current.length > 0) {
            removeHandlers();
            if (htmlElementRef.current && !pageFlip.current) {
                pageFlip.current = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$page$2d$flip$2f$dist$2f$js$2f$page$2d$flip$2e$browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFlip"](htmlElementRef.current, props);
            }
            if (!pageFlip.current.getFlipController()) {
                pageFlip.current.loadFromHTML(childRef.current);
            } else {
                pageFlip.current.updateFromHtml(childRef.current);
            }
            setHandlers();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pages
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: htmlElementRef,
        className: props.className,
        style: props.style
    }, pages);
});
const HTMLFlipBook = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$galaxybook26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(HTMLFlipBookForward);
const __TURBOPACK__default__export__ = HTMLFlipBook;
 //# sourceMappingURL=index.es.js.map
}),
];

//# sourceMappingURL=e2088_61b4e53c._.js.map