
//
// StyleDictionaryColor.m
//

// Do not edit directly, this file was auto-generated.


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.980f blue:0.941f alpha:1.000f],
[UIColor colorWithRed:0.996f green:0.922f blue:0.784f alpha:1.000f],
[UIColor colorWithRed:0.984f green:0.827f blue:0.553f alpha:1.000f],
[UIColor colorWithRed:0.965f green:0.678f blue:0.333f alpha:1.000f],
[UIColor colorWithRed:0.929f green:0.537f blue:0.212f alpha:1.000f],
[UIColor colorWithRed:0.867f green:0.420f blue:0.125f alpha:1.000f],
[UIColor colorWithRed:0.753f green:0.337f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.612f green:0.259f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.482f green:0.204f blue:0.118f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.965f blue:0.996f alpha:1.000f],
[UIColor colorWithRed:0.690f green:0.890f blue:0.988f alpha:1.000f],
[UIColor colorWithRed:0.541f green:0.839f blue:0.980f alpha:1.000f],
[UIColor colorWithRed:0.329f green:0.765f blue:0.973f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.722f blue:0.965f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.651f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.592f blue:0.871f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.463f blue:0.678f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.357f blue:0.525f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.275f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.949f green:0.945f blue:0.941f alpha:1.000f],
[UIColor colorWithRed:0.835f green:0.827f blue:0.820f alpha:1.000f],
[UIColor colorWithRed:0.757f green:0.745f blue:0.733f alpha:1.000f],
[UIColor colorWithRed:0.647f green:0.627f blue:0.612f alpha:1.000f],
[UIColor colorWithRed:0.580f green:0.553f blue:0.537f alpha:1.000f],
[UIColor colorWithRed:0.475f green:0.443f blue:0.420f alpha:1.000f],
[UIColor colorWithRed:0.431f green:0.404f blue:0.380f alpha:1.000f],
[UIColor colorWithRed:0.337f green:0.314f blue:0.298f alpha:1.000f],
[UIColor colorWithRed:0.263f green:0.243f blue:0.231f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.184f blue:0.176f alpha:1.000f],
[UIColor colorWithRed:0.937f green:0.945f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:0.808f green:0.831f blue:0.863f alpha:1.000f],
[UIColor colorWithRed:0.718f green:0.749f blue:0.796f alpha:1.000f],
[UIColor colorWithRed:0.588f green:0.635f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.506f green:0.565f blue:0.647f alpha:1.000f],
[UIColor colorWithRed:0.384f green:0.455f blue:0.557f alpha:1.000f],
[UIColor colorWithRed:0.349f green:0.416f blue:0.506f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.322f blue:0.396f alpha:1.000f],
[UIColor colorWithRed:0.212f green:0.251f blue:0.306f alpha:1.000f],
[UIColor colorWithRed:0.161f green:0.192f blue:0.235f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.965f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.788f green:0.886f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.686f green:0.831f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.541f green:0.757f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.455f green:0.710f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.318f green:0.635f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.290f green:0.576f blue:0.910f alpha:1.000f],
[UIColor colorWithRed:0.227f green:0.451f blue:0.710f alpha:1.000f],
[UIColor colorWithRed:0.176f green:0.349f blue:0.549f alpha:1.000f],
[UIColor colorWithRed:0.133f green:0.267f blue:0.420f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.918f blue:0.922f alpha:1.000f],
[UIColor colorWithRed:0.996f green:0.745f blue:0.757f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.620f blue:0.639f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.447f blue:0.471f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.337f blue:0.369f alpha:1.000f],
[UIColor colorWithRed:0.984f green:0.173f blue:0.212f alpha:1.000f],
[UIColor colorWithRed:0.894f green:0.157f blue:0.192f alpha:1.000f],
[UIColor colorWithRed:0.698f green:0.122f blue:0.149f alpha:1.000f],
[UIColor colorWithRed:0.541f green:0.094f blue:0.118f alpha:1.000f],
[UIColor colorWithRed:0.412f green:0.071f blue:0.090f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.988f blue:0.914f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.961f blue:0.729f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.941f blue:0.596f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.918f blue:0.416f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.898f blue:0.302f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.875f blue:0.125f alpha:1.000f],
[UIColor colorWithRed:0.910f green:0.796f blue:0.114f alpha:1.000f],
[UIColor colorWithRed:0.710f green:0.620f blue:0.090f alpha:1.000f],
[UIColor colorWithRed:0.549f green:0.482f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.420f green:0.369f blue:0.051f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end