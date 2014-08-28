
declare module Plottable {
    module Util {
        module Methods {
            function inRange(x: number, a: number, b: number): boolean;
            function warn(warning: string): void;
            function addArrays(alist: number[], blist: number[]): number[];
            function intersection<T>(set1: D3.Set<T>, set2: D3.Set<T>): D3.Set<string>;
            function _accessorize(accessor: any): IAccessor;
            function union<T>(set1: D3.Set<T>, set2: D3.Set<T>): D3.Set<string>;
            function populateMap<T>(keys: string[], transform: (key: string) => T): D3.Map<T>;
            function _applyAccessor(accessor: IAccessor, plot: Plottable.Abstract.Plot): (d: any, i: number) => any;
            function uniq<T>(arr: T[]): T[];
            function createFilledArray<T>(value: T, count: number): T[];
            function createFilledArray<T>(func: (index?: number) => T, count: number): T[];
            function flatten<T>(a: T[][]): T[];
            function arrayEq<T>(a: T[], b: T[]): boolean;
            function objEq(a: any, b: any): boolean;
            function max(arr: number[], default_val?: number): number;
            function max<T>(arr: T[], acc: (x: T) => number, default_val?: number): number;
            function min(arr: number[], default_val?: number): number;
            function min<T>(arr: T[], acc: (x: T) => number, default_val?: number): number;
        }
    }
}


declare module Plottable {
    module Util {
        module OpenSource {
            function sortedIndex(val: number, arr: number[]): number;
            function sortedIndex(val: number, arr: any[], accessor: IAccessor): number;
        }
    }
}


declare module Plottable {
    module Util {
        class IDCounter {
            increment(id: any): number;
            decrement(id: any): number;
            get(id: any): number;
        }
    }
}


declare module Plottable {
    module Util {
        class StrictEqualityAssociativeArray {
            set(key: any, value: any): boolean;
            get(key: any): any;
            has(key: any): boolean;
            values(): any[];
            keys(): any[];
            map(cb: (key?: any, val?: any, index?: number) => any): any[];
            delete(key: any): boolean;
        }
    }
}


declare module Plottable {
    module Util {
        class Cache<T> {
            constructor(compute: (k: string) => T, canonicalKey?: string, valueEq?: (v: T, w: T) => boolean);
            get(k: string): T;
            clear(): Cache<T>;
        }
    }
}


declare module Plottable {
    module Util {
        module Text {
            var HEIGHT_TEXT: string;
            interface Dimensions {
                width: number;
                height: number;
            }
            interface TextMeasurer {
                (s: string): Dimensions;
            }
            function getTextMeasurer(selection: D3.Selection): TextMeasurer;
            class CachingCharacterMeasurer {
                measure: TextMeasurer;
                constructor(textSelection: D3.Selection);
                clear(): CachingCharacterMeasurer;
            }
            function getTruncatedText(text: string, availableWidth: number, measurer: TextMeasurer): string;
            function _addEllipsesToLine(line: string, width: number, measureText: TextMeasurer): string;
            function writeLineHorizontally(line: string, g: D3.Selection, width: number, height: number, xAlign?: string, yAlign?: string): {
                width: number;
                height: number;
            };
            function writeLineVertically(line: string, g: D3.Selection, width: number, height: number, xAlign?: string, yAlign?: string, rotation?: string): {
                width: number;
                height: number;
            };
            interface IWriteTextResult {
                textFits: boolean;
                usedWidth: number;
                usedHeight: number;
            }
            interface IWriteOptions {
                g: D3.Selection;
                xAlign: string;
                yAlign: string;
            }
            function writeText(text: string, width: number, height: number, tm: TextMeasurer, horizontally?: boolean, write?: IWriteOptions): IWriteTextResult;
        }
    }
}


declare module Plottable {
    module Util {
        module WordWrap {
            interface IWrappedText {
                originalText: string;
                lines: string[];
                textFits: boolean;
            }
            function breakTextToFitRect(text: string, width: number, height: number, measureText: Text.TextMeasurer): IWrappedText;
            function canWrapWithoutBreakingWords(text: string, width: number, widthMeasure: (s: string) => number): boolean;
        }
    }
}

declare module Plottable {
    module Util {
        module DOM {
            function getBBox(element: D3.Selection): SVGRect;
            var POLYFILL_TIMEOUT_MSEC: number;
            function requestAnimationFramePolyfill(fn: () => any): void;
            function isSelectionRemovedFromSVG(selection: D3.Selection): boolean;
            function getElementWidth(elem: HTMLScriptElement): number;
            function getElementHeight(elem: HTMLScriptElement): number;
            function getSVGPixelWidth(svg: D3.Selection): number;
            function translate(s: D3.Selection, x?: number, y?: number): any;
            function boxesOverlap(boxA: ClientRect, boxB: ClientRect): boolean;
        }
    }
}


declare module Plottable {
    interface Formatter {
        (d: any): string;
    }
    var MILLISECONDS_IN_ONE_DAY: number;
    class Formatters {
        static currency(precision?: number, symbol?: string, prefix?: boolean, onlyShowUnchanged?: boolean): (d: any) => string;
        static fixed(precision?: number, onlyShowUnchanged?: boolean): (d: any) => string;
        static general(precision?: number, onlyShowUnchanged?: boolean): (d: any) => string;
        static identity(): (d: any) => string;
        static percentage(precision?: number, onlyShowUnchanged?: boolean): (d: any) => string;
        static siSuffix(precision?: number): (d: any) => string;
        static time(): (d: any) => string;
        static relativeDate(baseValue?: number, increment?: number, label?: string): (d: any) => string;
    }
}


declare module Plottable {
    var version: string;
}


declare module Plottable {
    module Core {
        class Colors {
            static CORAL_RED: string;
            static INDIGO: string;
            static ROBINS_EGG_BLUE: string;
            static FERN: string;
            static BURNING_ORANGE: string;
            static ROYAL_HEATH: string;
            static CONIFER: string;
            static CERISE_RED: string;
            static BRIGHT_SUN: string;
            static JACARTA: string;
            static PLOTTABLE_COLORS: string[];
        }
    }
}


declare module Plottable {
    module Abstract {
        class PlottableObject {
            _plottableID: number;
        }
    }
}


declare module Plottable {
    module Core {
        interface IListenable {
            broadcaster: Broadcaster;
        }
        interface IBroadcasterCallback {
            (listenable: IListenable, ...args: any[]): any;
        }
        class Broadcaster extends Plottable.Abstract.PlottableObject {
            listenable: IListenable;
            constructor(listenable: IListenable);
            registerListener(key: any, callback: IBroadcasterCallback): Broadcaster;
            broadcast(...args: any[]): Broadcaster;
            deregisterListener(key: any): Broadcaster;
            deregisterAllListeners(): void;
        }
    }
}


declare module Plottable {
    class DataSource extends Plottable.Abstract.PlottableObject implements Plottable.Core.IListenable {
        broadcaster: any;
        constructor(data?: any[], metadata?: any);
        data(): any[];
        data(data: any[]): DataSource;
        metadata(): any;
        metadata(metadata: any): DataSource;
        _getExtent(accessor: IAccessor): any[];
    }
}


declare module Plottable {
    module Abstract {
        class Component extends PlottableObject {
            static AUTORESIZE_BY_DEFAULT: boolean;
            element: D3.Selection;
            content: D3.Selection;
            backgroundContainer: D3.Selection;
            foregroundContainer: D3.Selection;
            clipPathEnabled: boolean;
            xOrigin: number;
            yOrigin: number;
            _parent: ComponentContainer;
            _xAlignProportion: number;
            _yAlignProportion: number;
            _fixedHeightFlag: boolean;
            _fixedWidthFlag: boolean;
            _isSetup: boolean;
            _isAnchored: boolean;
            _anchor(element: D3.Selection): void;
            _setup(): void;
            _requestedSpace(availableWidth: number, availableHeight: number): ISpaceRequest;
            _computeLayout(xOrigin?: number, yOrigin?: number, availableWidth?: number, availableHeight?: number): void;
            _render(): void;
            _scheduleComputeLayout(): void;
            _doRender(): void;
            _invalidateLayout(): void;
            renderTo(element: any): Component;
            resize(width?: number, height?: number): Component;
            autoResize(flag: boolean): Component;
            xAlign(alignment: string): Component;
            yAlign(alignment: string): Component;
            xOffset(offset: number): Component;
            yOffset(offset: number): Component;
            registerInteraction(interaction: Interaction): Component;
            classed(cssClass: string): boolean;
            classed(cssClass: string, addClass: boolean): Component;
            _isFixedWidth(): boolean;
            _isFixedHeight(): boolean;
            merge(c: Component): Plottable.Component.Group;
            detach(): Component;
            remove(): void;
            width(): number;
            height(): number;
        }
    }
}


declare module Plottable {
    module Abstract {
        class ComponentContainer extends Component {
            _components: Component[];
            _anchor(element: D3.Selection): void;
            _render(): void;
            _removeComponent(c: Component): void;
            _addComponent(c: Component, prepend?: boolean): boolean;
            components(): Component[];
            empty(): boolean;
            detachAll(): ComponentContainer;
            remove(): void;
        }
    }
}


declare module Plottable {
    module Component {
        class Group extends Plottable.Abstract.ComponentContainer {
            constructor(components?: Plottable.Abstract.Component[]);
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            merge(c: Plottable.Abstract.Component): Group;
            _computeLayout(xOrigin?: number, yOrigin?: number, availableWidth?: number, availableHeight?: number): Group;
            _isFixedWidth(): boolean;
            _isFixedHeight(): boolean;
        }
    }
}


declare module Plottable {
    module Component {
        interface IterateLayoutResult {
            colProportionalSpace: number[];
            rowProportionalSpace: number[];
            guaranteedWidths: number[];
            guaranteedHeights: number[];
            wantsWidth: boolean;
            wantsHeight: boolean;
        }
        class Table extends Plottable.Abstract.ComponentContainer {
            constructor(rows?: Plottable.Abstract.Component[][]);
            addComponent(row: number, col: number, component: Plottable.Abstract.Component): Table;
            _removeComponent(component: Plottable.Abstract.Component): void;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _computeLayout(xOffset?: number, yOffset?: number, availableWidth?: number, availableHeight?: number): void;
            padding(rowPadding: number, colPadding: number): Table;
            rowWeight(index: number, weight: number): Table;
            colWeight(index: number, weight: number): Table;
            _isFixedWidth(): boolean;
            _isFixedHeight(): boolean;
        }
    }
}


declare module Plottable {
    module Abstract {
        class Scale extends PlottableObject implements Plottable.Core.IListenable {
            _d3Scale: D3.Scale.Scale;
            broadcaster: any;
            _rendererAttrID2Extent: {
                [x: string]: any[];
            };
            constructor(scale: D3.Scale.Scale);
            _getAllExtents(): any[][];
            _getExtent(): any[];
            autoDomain(): Scale;
            _autoDomainIfAutomaticMode(): void;
            scale(value: any): any;
            domain(): any[];
            domain(values: any[]): Scale;
            _getDomain(): any[];
            _setDomain(values: any[]): void;
            range(): any[];
            range(values: any[]): Scale;
            copy(): Scale;
            updateExtent(plotProvidedKey: string, attr: string, extent: any[]): Scale;
            removeExtent(plotProvidedKey: string, attr: string): Scale;
        }
    }
}


declare module Plottable {
    module Abstract {
        class Plot extends Component {
            _dataSource: DataSource;
            _dataChanged: boolean;
            renderArea: D3.Selection;
            element: D3.Selection;
            _animate: boolean;
            _animators: Plottable.Animator.IPlotAnimatorMap;
            _ANIMATION_DURATION: number;
            _projectors: {
                [x: string]: _IProjector;
            };
            constructor();
            constructor(dataset: any[]);
            constructor(dataset: DataSource);
            _anchor(element: D3.Selection): void;
            remove(): void;
            dataSource(): DataSource;
            dataSource(source: DataSource): Plot;
            _onDataSourceUpdate(): void;
            project(attrToSet: string, accessor: any, scale?: Scale): Plot;
            _generateAttrToProjector(): IAttributeToProjector;
            _doRender(): void;
            _paint(): void;
            _setup(): void;
            animate(enabled: boolean): Plot;
            detach(): Plot;
            _updateAllProjectors(): void;
            _updateProjector(attr: string): void;
            _applyAnimatedAttributes(selection: any, animatorKey: string, attrToProjector: IAttributeToProjector): any;
            animator(animatorKey: string): Plottable.Animator.IPlotAnimator;
            animator(animatorKey: string, animator: Plottable.Animator.IPlotAnimator): Plot;
        }
    }
}


declare module Plottable {
    module Abstract {
        class XYPlot extends Plot {
            xScale: Scale;
            yScale: Scale;
            constructor(dataset: any, xScale: Scale, yScale: Scale);
            project(attrToSet: string, accessor: any, scale?: Scale): XYPlot;
            _computeLayout(xOffset?: number, yOffset?: number, availableWidth?: number, availableHeight?: number): void;
            _updateXDomainer(): void;
            _updateYDomainer(): void;
        }
    }
}


declare module Plottable {
    interface DatasetDrawerKey {
        dataset: DataSource;
        drawer: Plottable.Abstract._Drawer;
        key: string;
    }
    module Abstract {
        class NewStylePlot extends XYPlot {
            _key2DatasetDrawerKey: D3.Map<DatasetDrawerKey>;
            _datasetKeysInOrder: string[];
            constructor(xScale?: Scale, yScale?: Scale);
            _setup(): void;
            remove(): void;
            addDataset(key: string, dataset: DataSource): NewStylePlot;
            addDataset(key: string, dataset: any[]): NewStylePlot;
            addDataset(dataset: DataSource): NewStylePlot;
            addDataset(dataset: any[]): NewStylePlot;
            _addDataset(key: string, dataset: DataSource): void;
            _getDrawer(key: string): _Drawer;
            _updateProjector(attr: string): void;
            datasetOrder(): string[];
            datasetOrder(order: string[]): NewStylePlot;
            removeDataset(key: string): NewStylePlot;
            _getDatasetsInOrder(): DataSource[];
            _getDrawersInOrder(): _Drawer[];
        }
    }
}


declare module Plottable {
    module Core {
        module RenderController {
            module RenderPolicy {
                interface IRenderPolicy {
                    render(): any;
                }
                class Immediate implements IRenderPolicy {
                    render(): void;
                }
                class AnimationFrame implements IRenderPolicy {
                    render(): void;
                }
                class Timeout implements IRenderPolicy {
                    _timeoutMsec: number;
                    render(): void;
                }
            }
        }
    }
}


declare module Plottable {
    module Core {
        module RenderController {
            var _renderPolicy: RenderPolicy.IRenderPolicy;
            function setRenderPolicy(policy: RenderPolicy.IRenderPolicy): any;
            function registerToRender(c: Plottable.Abstract.Component): void;
            function registerToComputeLayout(c: Plottable.Abstract.Component): void;
            function flush(): void;
        }
    }
}


declare module Plottable {
    module Core {
        module ResizeBroadcaster {
            function resizing(): boolean;
            function clearResizing(): any;
            function register(c: Plottable.Abstract.Component): void;
            function deregister(c: Plottable.Abstract.Component): void;
        }
    }
}


declare module Plottable {
    module Animator {
        interface IPlotAnimator {
            animate(selection: any, attrToProjector: IAttributeToProjector): D3.Selection;
        }
        interface IPlotAnimatorMap {
            [animatorKey: string]: IPlotAnimator;
        }
    }
}

declare module Plottable {
    interface IDataset {
        data: any[];
        metadata: IMetadata;
    }
    interface IMetadata {
        cssClass?: string;
        color?: string;
    }
    interface IAccessor {
        (datum: any, index?: number, metadata?: any): any;
    }
    interface IAppliedAccessor {
        (datum: any, index: number): any;
    }
    interface _IProjector {
        accessor: IAccessor;
        scale?: Plottable.Abstract.Scale;
        attribute: string;
    }
    interface IAttributeToProjector {
        [attrToSet: string]: IAppliedAccessor;
    }
    interface SelectionArea {
        xMin: number;
        xMax: number;
        yMin: number;
        yMax: number;
    }
    interface FullSelectionArea {
        pixel: SelectionArea;
        data: SelectionArea;
    }
    interface ISpaceRequest {
        width: number;
        height: number;
        wantsWidth: boolean;
        wantsHeight: boolean;
    }
    interface IExtent {
        min: number;
        max: number;
    }
    interface Point {
        x: number;
        y: number;
    }
}


declare module Plottable {
    class Domainer {
        constructor(combineExtents?: (extents: any[][]) => any[]);
        computeDomain(extents: any[][], scale: Plottable.Abstract.QuantitativeScale): any[];
        pad(padProportion?: number): Domainer;
        addPaddingException(exception: any, key?: string): Domainer;
        removePaddingException(keyOrException: any): Domainer;
        addIncludedValue(value: any, key?: string): Domainer;
        removeIncludedValue(valueOrKey: any): Domainer;
        nice(count?: number): Domainer;
    }
}


declare module Plottable {
    module Abstract {
        class QuantitativeScale extends Scale {
            _d3Scale: D3.Scale.QuantitativeScale;
            _lastRequestedTickCount: number;
            _PADDING_FOR_IDENTICAL_DOMAIN: number;
            _userSetDomainer: boolean;
            constructor(scale: D3.Scale.QuantitativeScale);
            _getExtent(): any[];
            invert(value: number): number;
            copy(): QuantitativeScale;
            domain(): any[];
            domain(values: any[]): QuantitativeScale;
            _setDomain(values: any[]): void;
            interpolate(): D3.Transition.Interpolate;
            interpolate(factory: D3.Transition.Interpolate): QuantitativeScale;
            rangeRound(values: number[]): QuantitativeScale;
            clamp(): boolean;
            clamp(clamp: boolean): QuantitativeScale;
            ticks(count?: number): any[];
            tickFormat(count: number, format?: string): (n: number) => string;
            _niceDomain(domain: any[], count?: number): any[];
            domainer(): Domainer;
            domainer(domainer: Domainer): QuantitativeScale;
            _defaultExtent(): any[];
        }
    }
}


declare module Plottable {
    module Scale {
        class Linear extends Plottable.Abstract.QuantitativeScale {
            constructor();
            constructor(scale: D3.Scale.LinearScale);
            copy(): Linear;
        }
    }
}


declare module Plottable {
    module Scale {
        class Log extends Plottable.Abstract.QuantitativeScale {
            constructor();
            constructor(scale: D3.Scale.LogScale);
            copy(): Log;
            _defaultExtent(): number[];
        }
    }
}


declare module Plottable {
    module Scale {
        class ModifiedLog extends Plottable.Abstract.QuantitativeScale {
            constructor(base?: number);
            scale(x: number): number;
            invert(x: number): number;
            _getDomain(): number[];
            _setDomain(values: number[]): void;
            ticks(count?: number): number[];
            copy(): ModifiedLog;
            _niceDomain(domain: any[], count?: number): any[];
            showIntermediateTicks(): boolean;
            showIntermediateTicks(show: boolean): ModifiedLog;
        }
    }
}


declare module Plottable {
    module Scale {
        class Ordinal extends Plottable.Abstract.Scale {
            _d3Scale: D3.Scale.OrdinalScale;
            constructor(scale?: D3.Scale.OrdinalScale);
            _getExtent(): any[];
            domain(): any[];
            domain(values: any[]): Ordinal;
            _setDomain(values: any[]): void;
            range(): number[];
            range(values: number[]): Ordinal;
            rangeBand(): number;
            innerPadding(): number;
            fullBandStartAndWidth(v: any): number[];
            rangeType(): string;
            rangeType(rangeType: string, outerPadding?: number, innerPadding?: number): Ordinal;
            copy(): Ordinal;
        }
    }
}


declare module Plottable {
    module Scale {
        class Color extends Plottable.Abstract.Scale {
            constructor(scaleType?: string);
            _getExtent(): any[];
        }
    }
}


declare module Plottable {
    module Scale {
        class Time extends Plottable.Abstract.QuantitativeScale {
            constructor();
            constructor(scale: D3.Scale.LinearScale);
            tickInterval(interval: D3.Time.Interval, step?: number): any[];
            domain(): any[];
            domain(values: any[]): Time;
            copy(): Time;
            _defaultExtent(): any[];
        }
    }
}


declare module Plottable {
    module Scale {
        class InterpolatedColor extends Plottable.Abstract.QuantitativeScale {
            constructor(colorRange?: any, scaleType?: string);
            colorRange(): string[];
            colorRange(colorRange: any): InterpolatedColor;
            scaleType(): string;
            scaleType(scaleType: string): InterpolatedColor;
            autoDomain(): InterpolatedColor;
        }
    }
}


declare module Plottable {
    module Util {
        class ScaleDomainCoordinator {
            constructor(scales: Plottable.Abstract.Scale[]);
            rescale(scale: Plottable.Abstract.Scale): void;
        }
    }
}


declare module Plottable {
    module Abstract {
        class _Drawer {
            renderArea: D3.Selection;
            key: string;
            constructor(key: string);
            remove(): void;
            draw(data: any[][], attrToProjector: IAttributeToProjector, animator?: Plottable.Animator.Null): void;
        }
    }
}


declare module Plottable {
    module _Drawer {
        class Rect extends Plottable.Abstract._Drawer {
            draw(data: any[][], attrToProjector: IAttributeToProjector, animator?: Plottable.Animator.Null): void;
        }
    }
}


declare module Plottable {
    module Abstract {
        class Axis extends Component {
            static END_TICK_MARK_CLASS: string;
            static TICK_MARK_CLASS: string;
            static TICK_LABEL_CLASS: string;
            _tickMarkContainer: D3.Selection;
            _tickLabelContainer: D3.Selection;
            _baseline: D3.Selection;
            _scale: Scale;
            _formatter: Formatter;
            _orientation: string;
            _userRequestedWidth: any;
            _userRequestedHeight: any;
            _computedWidth: number;
            _computedHeight: number;
            constructor(scale: Scale, orientation: string, formatter?: (d: any) => string);
            remove(): void;
            _isHorizontal(): boolean;
            _computeWidth(): number;
            _computeHeight(): number;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _isFixedHeight(): boolean;
            _isFixedWidth(): boolean;
            _rescale(): void;
            _computeLayout(xOffset?: number, yOffset?: number, availableWidth?: number, availableHeight?: number): void;
            _setup(): void;
            _getTickValues(): any[];
            _doRender(): void;
            _generateBaselineAttrHash(): {
                x1: number;
                y1: number;
                x2: number;
                y2: number;
            };
            _generateTickMarkAttrHash(isEndTickMark?: boolean): {
                x1: any;
                y1: any;
                x2: any;
                y2: any;
            };
            _invalidateLayout(): void;
            width(): number;
            width(w: any): Axis;
            height(): number;
            height(h: any): Axis;
            formatter(): Formatter;
            formatter(formatter: Formatter): Axis;
            tickLength(): number;
            tickLength(length: number): Axis;
            endTickLength(): number;
            endTickLength(length: number): Axis;
            _maxLabelTickLength(): number;
            tickLabelPadding(): number;
            tickLabelPadding(padding: number): Axis;
            gutter(): number;
            gutter(size: number): Axis;
            orient(): string;
            orient(newOrientation: string): Axis;
            showEndTickLabels(): boolean;
            showEndTickLabels(show: boolean): Axis;
            _hideEndTickLabels(): void;
            _hideOverlappingTickLabels(): void;
        }
    }
}


declare module Plottable {
    module Axis {
        interface ITimeInterval {
            timeUnit: D3.Time.Interval;
            step: number;
            formatString: string;
        }
        class Time extends Plottable.Abstract.Axis {
            _majorTickLabels: D3.Selection;
            _minorTickLabels: D3.Selection;
            _scale: Plottable.Scale.Time;
            static minorIntervals: ITimeInterval[];
            static majorIntervals: ITimeInterval[];
            constructor(scale: Plottable.Scale.Time, orientation: string);
            _computeHeight(): number;
            _setup(): void;
            _getTickIntervalValues(interval: ITimeInterval): any[];
            _getTickValues(): any[];
            _measureTextHeight(container: D3.Selection): number;
            _doRender(): void;
        }
    }
}


declare module Plottable {
    module Axis {
        class Numeric extends Plottable.Abstract.Axis {
            _scale: Plottable.Abstract.QuantitativeScale;
            constructor(scale: Plottable.Abstract.QuantitativeScale, orientation: string, formatter?: (d: any) => string);
            _setup(): void;
            _computeWidth(): number;
            _computeHeight(): number;
            _getTickValues(): any[];
            _rescale(): void;
            _doRender(): void;
            tickLabelPosition(): string;
            tickLabelPosition(position: string): Numeric;
            showEndTickLabel(orientation: string): boolean;
            showEndTickLabel(orientation: string, show: boolean): Numeric;
        }
    }
}


declare module Plottable {
    module Axis {
        class Category extends Plottable.Abstract.Axis {
            _scale: Plottable.Scale.Ordinal;
            constructor(scale: Plottable.Scale.Ordinal, orientation?: string, formatter?: (d: any) => string);
            _setup(): void;
            _rescale(): void;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _getTickValues(): string[];
            _doRender(): void;
            _computeLayout(xOrigin?: number, yOrigin?: number, availableWidth?: number, availableHeight?: number): void;
        }
    }
}


declare module Plottable {
    module Component {
        class Label extends Plottable.Abstract.Component {
            constructor(displayText?: string, orientation?: string);
            xAlign(alignment: string): Label;
            yAlign(alignment: string): Label;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _setup(): void;
            text(): string;
            text(displayText: string): Label;
            _doRender(): void;
            _computeLayout(xOffset?: number, yOffset?: number, availableWidth?: number, availableHeight?: number): Label;
        }
        class TitleLabel extends Label {
            constructor(text?: string, orientation?: string);
        }
        class AxisLabel extends Label {
            constructor(text?: string, orientation?: string);
        }
    }
}


declare module Plottable {
    module Component {
        interface ToggleCallback {
            (datum: string, newState: boolean): any;
        }
        interface HoverCallback {
            (datum?: string): any;
        }
        class Legend extends Plottable.Abstract.Component {
            static SUBELEMENT_CLASS: string;
            constructor(colorScale?: Plottable.Scale.Color);
            remove(): void;
            toggleCallback(callback: ToggleCallback): Legend;
            toggleCallback(): ToggleCallback;
            hoverCallback(callback: HoverCallback): Legend;
            hoverCallback(): HoverCallback;
            scale(scale: Plottable.Scale.Color): Legend;
            scale(): Plottable.Scale.Color;
            _computeLayout(xOrigin?: number, yOrigin?: number, availableWidth?: number, availableHeight?: number): void;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _doRender(): void;
        }
    }
}


declare module Plottable {
    module Component {
        class HorizontalLegend extends Plottable.Abstract.Component {
            static LEGEND_ROW_CLASS: string;
            static LEGEND_ENTRY_CLASS: string;
            constructor(colorScale: Plottable.Scale.Color);
            remove(): void;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _doRender(): void;
        }
    }
}


declare module Plottable {
    module Component {
        class Gridlines extends Plottable.Abstract.Component {
            constructor(xScale: Plottable.Abstract.QuantitativeScale, yScale: Plottable.Abstract.QuantitativeScale);
            remove(): Gridlines;
            _setup(): void;
            _doRender(): void;
        }
    }
}


declare module Plottable {
    module Plot {
        class Scatter extends Plottable.Abstract.XYPlot {
            _animators: Plottable.Animator.IPlotAnimatorMap;
            constructor(dataset: any, xScale: Plottable.Abstract.Scale, yScale: Plottable.Abstract.Scale);
            project(attrToSet: string, accessor: any, scale?: Plottable.Abstract.Scale): Scatter;
            _paint(): void;
        }
    }
}


declare module Plottable {
    module Plot {
        class Grid extends Plottable.Abstract.XYPlot {
            colorScale: Plottable.Abstract.Scale;
            xScale: Plottable.Scale.Ordinal;
            yScale: Plottable.Scale.Ordinal;
            _animators: Plottable.Animator.IPlotAnimatorMap;
            constructor(dataset: any, xScale: Plottable.Scale.Ordinal, yScale: Plottable.Scale.Ordinal, colorScale: Plottable.Abstract.Scale);
            project(attrToSet: string, accessor: any, scale?: Plottable.Abstract.Scale): Grid;
            _paint(): void;
        }
    }
}


declare module Plottable {
    module Abstract {
        class BarPlot extends XYPlot {
            _bars: D3.UpdateSelection;
            _baseline: D3.Selection;
            _baselineValue: number;
            _barAlignmentFactor: number;
            static _BarAlignmentToFactor: {
                [x: string]: number;
            };
            _isVertical: boolean;
            _animators: Plottable.Animator.IPlotAnimatorMap;
            constructor(dataset: any, xScale: Scale, yScale: Scale);
            _setup(): void;
            _paint(): void;
            baseline(value: number): BarPlot;
            barAlignment(alignment: string): BarPlot;
            selectBar(xValOrExtent: IExtent, yValOrExtent: IExtent, select?: boolean): D3.Selection;
            selectBar(xValOrExtent: number, yValOrExtent: IExtent, select?: boolean): D3.Selection;
            selectBar(xValOrExtent: IExtent, yValOrExtent: number, select?: boolean): D3.Selection;
            selectBar(xValOrExtent: number, yValOrExtent: number, select?: boolean): D3.Selection;
            deselectAll(): BarPlot;
            _updateDomainer(scale: Scale): void;
            _updateYDomainer(): void;
            _updateXDomainer(): void;
            _generateAttrToProjector(): IAttributeToProjector;
        }
    }
}


declare module Plottable {
    module Plot {
        class VerticalBar extends Plottable.Abstract.BarPlot {
            static _BarAlignmentToFactor: {
                [x: string]: number;
            };
            _isVertical: boolean;
            constructor(dataset: any, xScale: Plottable.Abstract.Scale, yScale: Plottable.Abstract.QuantitativeScale);
            _updateYDomainer(): void;
        }
    }
}


declare module Plottable {
    module Plot {
        class HorizontalBar extends Plottable.Abstract.BarPlot {
            static _BarAlignmentToFactor: {
                [x: string]: number;
            };
            isVertical: boolean;
            constructor(dataset: any, xScale: Plottable.Abstract.QuantitativeScale, yScale: Plottable.Abstract.Scale);
            _updateXDomainer(): void;
            _generateAttrToProjector(): IAttributeToProjector;
        }
    }
}


declare module Plottable {
    module Plot {
        class Line extends Plottable.Abstract.XYPlot {
            _animators: Plottable.Animator.IPlotAnimatorMap;
            constructor(dataset: any, xScale: Plottable.Abstract.Scale, yScale: Plottable.Abstract.Scale);
            _setup(): void;
            _appendPath(): void;
            _getResetYFunction(): (d: any, i: number) => any;
            _generateAttrToProjector(): IAttributeToProjector;
            _paint(): void;
            _wholeDatumAttributes(): string[];
        }
    }
}


declare module Plottable {
    module Plot {
        class Area extends Line {
            constructor(dataset: any, xScale: Plottable.Abstract.Scale, yScale: Plottable.Abstract.Scale);
            _appendPath(): void;
            _onDataSourceUpdate(): void;
            _updateYDomainer(): void;
            project(attrToSet: string, accessor: any, scale?: Plottable.Abstract.Scale): Area;
            _getResetYFunction(): IAppliedAccessor;
            _paint(): void;
            _wholeDatumAttributes(): string[];
        }
    }
}


declare module Plottable {
    module Abstract {
        class NewStyleBarPlot extends NewStylePlot {
            static _barAlignmentToFactor: {
                [x: string]: number;
            };
            static DEFAULT_WIDTH: number;
            _baseline: D3.Selection;
            _baselineValue: number;
            _barAlignmentFactor: number;
            _isVertical: boolean;
            _animators: Plottable.Animator.IPlotAnimatorMap;
            constructor(xScale: Scale, yScale: Scale);
            _getDrawer(key: string): _Drawer.Rect;
            _setup(): void;
            _paint(): void;
            baseline(value: number): any;
            _updateDomainer(scale: Scale): any;
            _generateAttrToProjector(): IAttributeToProjector;
            _updateXDomainer(): any;
            _updateYDomainer(): any;
        }
    }
}


declare module Plottable {
    module Plot {
        class ClusteredBar extends Plottable.Abstract.NewStyleBarPlot {
            static DEFAULT_WIDTH: number;
            _isVertical: boolean;
            constructor(xScale: Plottable.Abstract.Scale, yScale: Plottable.Abstract.QuantitativeScale);
            _generateAttrToProjector(): IAttributeToProjector;
            _paint(): void;
        }
    }
}


declare module Plottable {
    module Plot {
        class StackedBar extends Plottable.Abstract.NewStyleBarPlot {
            stackedData: any[][];
            _yAccessor: IAccessor;
            _isVertical: boolean;
            _baselineValue: number;
            _baseline: D3.Selection;
            _addDataset(key: string, dataset: any): void;
            _updateAllProjectors(): void;
            _generateAttrToProjector(): IAttributeToProjector;
            _paint(): void;
        }
    }
}


declare module Plottable {
    module Animator {
        class Null implements IPlotAnimator {
            animate(selection: any, attrToProjector: IAttributeToProjector): D3.Selection;
        }
    }
}


declare module Plottable {
    module Animator {
        class Default implements IPlotAnimator {
            _durationMsec: number;
            _delayMsec: number;
            _easing: string;
            animate(selection: any, attrToProjector: IAttributeToProjector): D3.Selection;
            duration(): number;
            duration(duration: number): Default;
            delay(): number;
            delay(delay: number): Default;
            easing(): string;
            easing(easing: string): Default;
        }
    }
}


declare module Plottable {
    module Animator {
        class IterativeDelay extends Default {
            _delayMsec: number;
            animate(selection: any, attrToProjector: IAttributeToProjector): D3.Selection;
        }
    }
}


declare module Plottable {
    module Animator {
        class Rect extends Default {
            isVertical: boolean;
            isReverse: boolean;
            constructor(isVertical?: boolean, isReverse?: boolean);
            animate(selection: any, attrToProjector: IAttributeToProjector): any;
        }
    }
}


declare module Plottable {
    module Core {
        interface IKeyEventListenerCallback {
            (e: D3.D3Event): any;
        }
        module KeyEventListener {
            function initialize(): void;
            function addCallback(keyCode: number, cb: IKeyEventListenerCallback): void;
        }
    }
}


declare module Plottable {
    module Abstract {
        class Interaction {
            hitBox: D3.Selection;
            componentToListenTo: Component;
            constructor(componentToListenTo: Component);
            _anchor(hitBox: D3.Selection): void;
            registerWithComponent(): Interaction;
        }
    }
}


declare module Plottable {
    module Interaction {
        class Click extends Plottable.Abstract.Interaction {
            constructor(componentToListenTo: Plottable.Abstract.Component);
            _anchor(hitBox: D3.Selection): void;
            _listenTo(): string;
            callback(cb: (x: number, y: number) => any): Click;
        }
        class DoubleClick extends Click {
            constructor(componentToListenTo: Plottable.Abstract.Component);
            _listenTo(): string;
        }
    }
}


declare module Plottable {
    module Interaction {
        class Mousemove extends Plottable.Abstract.Interaction {
            constructor(componentToListenTo: Plottable.Abstract.Component);
            _anchor(hitBox: D3.Selection): void;
            mousemove(x: number, y: number): void;
        }
    }
}


declare module Plottable {
    module Interaction {
        class Key extends Plottable.Abstract.Interaction {
            constructor(componentToListenTo: Plottable.Abstract.Component, keyCode: number);
            _anchor(hitBox: D3.Selection): void;
            callback(cb: () => any): Key;
        }
    }
}


declare module Plottable {
    module Interaction {
        class PanZoom extends Plottable.Abstract.Interaction {
            xScale: Plottable.Abstract.QuantitativeScale;
            yScale: Plottable.Abstract.QuantitativeScale;
            constructor(componentToListenTo: Plottable.Abstract.Component, xScale?: Plottable.Abstract.QuantitativeScale, yScale?: Plottable.Abstract.QuantitativeScale);
            resetZoom(): void;
            _anchor(hitBox: D3.Selection): void;
        }
    }
}


declare module Plottable {
    module Interaction {
        class BarHover extends Plottable.Abstract.Interaction {
            componentToListenTo: Plottable.Abstract.BarPlot;
            constructor(barPlot: Plottable.Abstract.BarPlot);
            _anchor(hitBox: D3.Selection): void;
            hoverMode(): string;
            hoverMode(mode: string): BarHover;
            onHover(callback: (datum: any, bar: D3.Selection) => any): BarHover;
            onUnhover(callback: (datum: any, bar: D3.Selection) => any): BarHover;
        }
    }
}


declare module Plottable {
    module Interaction {
        class Drag extends Plottable.Abstract.Interaction {
            origin: number[];
            location: number[];
            constructor(componentToListenTo: Plottable.Abstract.Component);
            dragstart(): (startLocation: Point) => void;
            dragstart(cb: (startLocation: Point) => any): Drag;
            drag(): (startLocation: Point, endLocation: Point) => void;
            drag(cb: (startLocation: Point, endLocation: Point) => any): Drag;
            dragend(): (startLocation: Point, endLocation: Point) => void;
            dragend(cb: (startLocation: Point, endLocation: Point) => any): Drag;
            _dragstart(): void;
            _doDragstart(): void;
            _drag(): void;
            _doDrag(): void;
            _dragend(): void;
            _doDragend(): void;
            _anchor(hitBox: D3.Selection): Drag;
            setupZoomCallback(xScale?: Plottable.Abstract.QuantitativeScale, yScale?: Plottable.Abstract.QuantitativeScale): Drag;
        }
    }
}


declare module Plottable {
    module Interaction {
        class DragBox extends Drag {
            dragBox: D3.Selection;
            boxIsDrawn: boolean;
            _dragstart(): void;
            clearBox(): DragBox;
            setBox(x0: number, x1: number, y0: number, y1: number): DragBox;
            _anchor(hitBox: D3.Selection): DragBox;
        }
    }
}


declare module Plottable {
    module Interaction {
        class XDragBox extends DragBox {
            _drag(): void;
            setBox(x0: number, x1: number): XDragBox;
        }
    }
}


declare module Plottable {
    module Interaction {
        class XYDragBox extends DragBox {
            _drag(): void;
        }
    }
}


declare module Plottable {
    module Interaction {
        class YDragBox extends DragBox {
            _drag(): void;
            setBox(y0: number, y1: number): YDragBox;
        }
    }
}


declare module Plottable {
    module Abstract {
        class Dispatcher extends PlottableObject {
            _target: D3.Selection;
            _event2Callback: {
                [x: string]: () => any;
            };
            constructor(target: D3.Selection);
            target(): D3.Selection;
            target(targetElement: D3.Selection): Dispatcher;
            connect(): Dispatcher;
            disconnect(): Dispatcher;
        }
    }
}


declare module Plottable {
    module Dispatcher {
        class Mouse extends Plottable.Abstract.Dispatcher {
            constructor(target: D3.Selection);
            mouseover(): (location: Point) => any;
            mouseover(callback: (location: Point) => any): Mouse;
            mousemove(): (location: Point) => any;
            mousemove(callback: (location: Point) => any): Mouse;
            mouseout(): (location: Point) => any;
            mouseout(callback: (location: Point) => any): Mouse;
        }
    }
}


declare module Plottable {
    module Template {
        class StandardChart extends Plottable.Component.Table {
            constructor();
            yAxis(y: Plottable.Abstract.Axis): StandardChart;
            yAxis(): Plottable.Abstract.Axis;
            xAxis(x: Plottable.Abstract.Axis): StandardChart;
            xAxis(): Plottable.Abstract.Axis;
            yLabel(y: Plottable.Component.AxisLabel): StandardChart;
            yLabel(y: string): StandardChart;
            yLabel(): Plottable.Component.AxisLabel;
            xLabel(x: Plottable.Component.AxisLabel): StandardChart;
            xLabel(x: string): StandardChart;
            xLabel(): Plottable.Component.AxisLabel;
            titleLabel(x: Plottable.Component.TitleLabel): StandardChart;
            titleLabel(x: string): StandardChart;
            titleLabel(): Plottable.Component.TitleLabel;
            center(c: Plottable.Abstract.Component): StandardChart;
        }
    }
}
